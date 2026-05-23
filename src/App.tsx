/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  calculatePlanetaryPositions, 
  calculateVimshottariDasa, 
  calculateAscendant,
  calculateHouses,
  calculateHouseSignificators,
  calculatePlanetSignificators,
  BirthDetails,
  PlanetPosition,
  DasaPeriod,
  HouseCusp,
  HouseSignificators,
  PlanetSignificators
} from './lib/astrology';
import { KundliChart } from './components/KundliChart';
import { PlanetaryTable } from './components/PlanetaryTable';
import { DasaTable } from './components/DasaTable';
import { DasaSignificators } from './components/DasaSignificators';
import { AIInsights } from './components/AIInsights';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Moon, 
  Sun, 
  Star, 
  Map, 
  Info, 
  Sparkles, 
  Search, 
  Plus, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Clock,
  Compass,
  CalendarDays,
  Globe,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { PRELOADED_PROFILES, AstroProfile } from './data/astroDatabank';
import { AddProfileModal } from './components/AddProfileModal';

export default function App() {
  // Profiles state - initialized with preloaded, and loaded custom profiles from localStorage
  const [profiles, setProfiles] = useState<AstroProfile[]>(() => {
    const saved = localStorage.getItem('custom_astro_profiles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return [...PRELOADED_PROFILES, ...parsed];
      } catch (e) {
        console.error("Error loading custom profiles from localStorage:", e);
      }
    }
    return PRELOADED_PROFILES;
  });

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("chart");

  // Astrological calculation states
  const [birthDetails, setBirthDetails] = useState<BirthDetails | null>(null);
  const [planets, setPlanets] = useState<PlanetPosition[]>([]);
  const [ascendant, setAscendant] = useState<number>(0);
  const [houses, setHouses] = useState<HouseCusp[]>([]);
  const [dasas, setDasas] = useState<DasaPeriod[]>([]);
  const [significators, setSignificators] = useState<HouseSignificators[]>([]);
  const [planetSignificators, setPlanetSignificators] = useState<PlanetSignificators[]>([]);

  // Get distinct categories
  const categories = ["All", ...Array.from(new Set(profiles.flatMap(p => p.categories)))];

  // Filter profiles based on search and category
  const filteredProfiles = profiles.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.biography.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  // Keep index within bounds whenever the filtered list changes
  useEffect(() => {
    if (filteredProfiles.length === 0) {
      setActiveIndex(0);
    } else if (activeIndex >= filteredProfiles.length) {
      setActiveIndex(filteredProfiles.length - 1);
    }
  }, [searchTerm, selectedCategory, filteredProfiles.length, activeIndex]);

  // Active profile object
  const activeProfile = filteredProfiles[activeIndex] || filteredProfiles[0] || null;

  // Recalculate astrology data when the active profile changes
  useEffect(() => {
    if (activeProfile) {
      const details: BirthDetails = {
        date: new Date(
          activeProfile.birthDate.year,
          activeProfile.birthDate.month,
          activeProfile.birthDate.day,
          activeProfile.birthDate.hour,
          activeProfile.birthDate.minute
        ),
        latitude: activeProfile.latitude,
        longitude: activeProfile.longitude,
        timezone: activeProfile.timezone
      };

      setBirthDetails(details);
      
      try {
        const planetData = calculatePlanetaryPositions(details);
        const asc = calculateAscendant(details);
        const houseData = calculateHouses(details, asc);
        
        setPlanets(planetData);
        setAscendant(asc);
        setHouses(houseData);
        
        const sigs = calculateHouseSignificators(planetData, houseData);
        setSignificators(sigs);
        
        const pSigs = calculatePlanetSignificators(planetData, houseData);
        setPlanetSignificators(pSigs);
        
        const moon = planetData.find(p => p.name === "Moon");
        if (moon) {
          const dasaData = calculateVimshottariDasa(moon.siderealLongitude, details.date);
          setDasas(dasaData);
        }
      } catch (err) {
        console.error("Error calculating astrological metrics for profile:", activeProfile.name, err);
      }
    } else {
      setBirthDetails(null);
    }
  }, [activeProfile]);

  const handleNext = () => {
    if (activeIndex < filteredProfiles.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleAddProfile = (newProfile: AstroProfile) => {
    // Append to custom profiles state and save to local storage
    const customOnly = profiles.filter(p => !PRELOADED_PROFILES.some(pre => pre.id === p.id));
    const updatedCustom = [...customOnly, newProfile];
    localStorage.setItem('custom_astro_profiles', JSON.stringify(updatedCustom));
    
    const updatedProfiles = [...PRELOADED_PROFILES, ...updatedCustom];
    setProfiles(updatedProfiles);
    
    // Switch to all, clear searches, and select the newly added profile (appended to end)
    setSelectedCategory("All");
    setSearchTerm("");
    setActiveIndex(updatedProfiles.length - 1);
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'AA': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'A': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'B': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'C': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'DD': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default: return 'bg-neutral-500/20 text-neutral-400 border-neutral-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#020d04] text-[#e0d8d0] font-sans selection:bg-[#10b981] selection:text-black">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#0b2b14] blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#10b981] blur-[150px] opacity-10" />
      </div>

      {/* Top Header */}
      <header className="relative z-20 border-b border-[#144b25] bg-black/40 backdrop-blur-md sticky top-0">
        <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#10b981] to-[#022c22] flex items-center justify-center shadow-lg shadow-[#10b981]/20">
              <Star className="text-white w-6 h-6 fill-current" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-[#e0d8d0]/60 bg-clip-text text-transparent">
                Astro-Databank Explorer
              </h1>
              <p className="text-[11px] text-[#10b981] tracking-widest uppercase font-black">Jyotish Pro</p>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => setIsAddModalOpen(true)}
              className="bg-[#10b981] hover:bg-[#059669] text-white px-5 py-2.5 text-xs font-bold rounded-lg shadow-md shadow-[#10b981]/10 flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" /> Add Profile
            </Button>
          </div>
        </div>
      </header>

      {/* Main Split Grid */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Astro-Databank Profile (5 cols) */}
          <section className="lg:col-span-5 space-y-6">
            
            {/* Search & Filters */}
            <Card className="bg-[#0b1c0e]/80 border-[#144b25] backdrop-blur-sm shadow-xl p-5 space-y-4 rounded-xl">
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e0d8d0]/40" />
                  <Input 
                    placeholder="Search people or biography..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 bg-black/40 border-[#144b25] focus:border-[#10b981] text-white text-base py-5"
                  />
                </div>

                {/* Dropdown list for selecting a person directly */}
                {filteredProfiles.length > 0 && (
                  <div className="space-y-1">
                    <label className="text-xs md:text-sm font-bold text-emerald-400/80 uppercase tracking-wider">Select Person ({filteredProfiles.length} loaded)</label>
                    <Select 
                      value={activeProfile?.id}
                      onValueChange={(id) => {
                        const idx = filteredProfiles.findIndex(p => p.id === id);
                        if (idx !== -1) setActiveIndex(idx);
                      }}
                    >
                      <SelectTrigger className="w-full bg-black/40 border-[#144b25] text-white text-base md:text-lg py-6 cursor-pointer">
                        <SelectValue placeholder="Select a person" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[350px] bg-[#0b1c0e] border-[#144b25] text-[#e0d8d0]">
                        <ScrollArea className="h-full max-h-[300px]">
                          {filteredProfiles.map((p, idx) => (
                            <SelectItem key={p.id} value={p.id} className="cursor-pointer hover:bg-[#10b981]/10 text-base md:text-lg py-3">
                              {idx + 1}. {p.name} ({p.roddenRating})
                            </SelectItem>
                          ))}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
              
              {/* Category horizontal scrolling list */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-zinc-800">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 text-xs md:text-sm rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat 
                        ? 'bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30 font-bold' 
                        : 'border-[#144b25] hover:border-[#10b981]/30 text-[#e0d8d0]/60 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Card>

            {/* Profile Navigation Controls */}
            <div className="flex items-center justify-between bg-black/35 border border-[#144b25] backdrop-blur-sm rounded-xl p-3 shadow-md">
              <Button 
                variant="outline" 
                onClick={handlePrev} 
                disabled={activeIndex <= 0}
                className="border-[#144b25] hover:bg-[#10b981]/15 text-[#e0d8d0] disabled:opacity-20 disabled:hover:bg-transparent cursor-pointer font-bold text-base md:text-lg py-6 px-5"
              >
                <ChevronLeft className="w-5 h-5 mr-1" /> Prev
              </Button>
              
              <span className="text-sm md:text-base font-black text-emerald-400 uppercase tracking-widest">
                {filteredProfiles.length > 0 
                  ? `Person ${activeIndex + 1} of ${filteredProfiles.length}`
                  : 'No matches found'}
              </span>

              <Button 
                variant="outline" 
                onClick={handleNext} 
                disabled={activeIndex >= filteredProfiles.length - 1}
                className="border-[#144b25] hover:bg-[#10b981]/15 text-[#e0d8d0] disabled:opacity-20 disabled:hover:bg-transparent cursor-pointer font-bold text-base md:text-lg py-6 px-5"
              >
                Next <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>

            {/* Profile Content Display */}
            {activeProfile ? (
              <motion.div
                key={activeProfile.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Profile Card Header */}
                <Card className="bg-gradient-to-br from-[#092211]/30 to-black/40 border-[#144b25] backdrop-blur-md shadow-xl overflow-hidden rounded-xl">
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{activeProfile.name}</h2>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {activeProfile.categories.map(cat => (
                            <Badge key={cat} variant="outline" className="text-sm border-[#144b25] text-emerald-400 bg-[#0b1c0e]/40 font-semibold px-2.5 py-0.5">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="text-right space-y-1.5">
                        <div className="flex items-center gap-1.5 justify-end">
                          <span className="text-xs text-[#e0d8d0]/40 uppercase tracking-wider">Rodden Rating</span>
                          <Badge variant="outline" className={`font-mono text-sm font-bold border px-2.5 py-0.5 ${getRatingColor(activeProfile.roddenRating)}`}>
                            {activeProfile.roddenRating}
                          </Badge>
                        </div>
                        <p className="text-xs text-[#e0d8d0]/60 italic">Source: {activeProfile.timeSource}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-[#144b25]/60 text-sm md:text-base">
                      <div className="space-y-1">
                        <span className="text-[#e0d8d0]/50 flex items-center gap-1"><CalendarDays className="w-4.5 h-4.5 text-[#10b981]" /> Date</span>
                        <p className="text-white font-black text-base md:text-lg">
                          {activeProfile.birthDate.year}-{(activeProfile.birthDate.month + 1).toString().padStart(2, '0')}-{activeProfile.birthDate.day.toString().padStart(2, '0')}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[#e0d8d0]/50 flex items-center gap-1"><Clock className="w-4.5 h-4.5 text-[#10b981]" /> Time</span>
                        <p className="text-white font-black text-base md:text-lg">
                          {activeProfile.birthDate.hour.toString().padStart(2, '0')}:{activeProfile.birthDate.minute.toString().padStart(2, '0')}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[#e0d8d0]/50 flex items-center gap-1"><Globe className="w-4.5 h-4.5 text-[#10b981]" /> Timezone</span>
                        <p className="text-white font-black text-base md:text-lg">GMT {activeProfile.timezone >= 0 ? '+' : ''}{activeProfile.timezone}</p>
                      </div>
                      <div className="col-span-2 space-y-1">
                        <span className="text-[#e0d8d0]/50 flex items-center gap-1"><MapPin className="w-4.5 h-4.5 text-[#10b981]" /> Coordinates & Place</span>
                        <p className="text-white font-black text-base md:text-lg">
                          {activeProfile.locationName} <span className="text-xs text-[#e0d8d0]/60 font-mono">({activeProfile.latitude.toFixed(4)}°, {activeProfile.longitude.toFixed(4)}°)</span>
                        </p>
                      </div>
                      {activeProfile.sourceUrl && (
                        <div className="space-y-1 flex items-end">
                          <a 
                            href={activeProfile.sourceUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#10b981] hover:text-[#059669] flex items-center gap-1 font-extrabold hover:underline"
                          >
                            Astro-Wiki <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>

                {/* Biography Section */}
                <Card className="bg-[#0b1c0e]/80 border-[#144b25] backdrop-blur-sm rounded-xl">
                  <CardHeader className="py-4 px-6 border-b border-[#144b25]">
                    <CardTitle className="text-white text-base md:text-lg flex items-center gap-2">
                      <Compass className="w-5 h-5 text-[#10b981]" />
                      Life Story & Astro Biography
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ScrollArea className="h-[350px] pr-2">
                      <div className="prose prose-invert prose-emerald max-w-none text-base md:text-lg text-[#e0d8d0]/80 leading-relaxed space-y-4">
                        <ReactMarkdown>{activeProfile.biography}</ReactMarkdown>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Key Life Events Timeline */}
                {activeProfile.keyEvents && activeProfile.keyEvents.length > 0 && (
                  <Card className="bg-[#0b1c0e]/80 border-[#144b25] backdrop-blur-sm rounded-xl">
                    <CardHeader className="py-4 px-6 border-b border-[#144b25]">
                      <CardTitle className="text-white text-base md:text-lg flex items-center gap-2">
                        <Star className="w-5 h-5 text-[#10b981]" />
                        Key Life Events (Astro-databank)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="relative border-l border-[#144b25] ml-2.5 pl-5 space-y-6 text-sm md:text-base">
                        {activeProfile.keyEvents.map((evt, idx) => (
                          <div key={idx} className="relative">
                            {/* Dot */}
                            <span className="absolute -left-[26px] top-1 w-3.5 h-3.5 rounded-full bg-[#10b981] border-2 border-black shadow shadow-[#10b981]/40" />
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono font-bold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25 px-2 py-0.5 rounded-full">
                                {evt.date}
                              </span>
                              <h4 className="font-bold text-white mt-1.5">{evt.title}</h4>
                              <p className="text-xs md:text-sm text-[#e0d8d0]/60 leading-relaxed">{evt.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ) : (
              <div className="p-12 text-center text-[#e0d8d0]/40 border-2 border-dashed border-[#144b25] rounded-2xl bg-black/10">
                <Search className="w-8 h-8 mx-auto text-[#e0d8d0]/20 mb-3" />
                <p>No profiles match your search criteria.</p>
              </div>
            )}
          </section>

          {/* RIGHT COLUMN: Astrological Calculations Dashboard (7 cols) */}
          <section className="lg:col-span-7 lg:sticky lg:top-24 space-y-6">
            {!birthDetails ? (
              <div className="h-[600px] flex flex-col items-center justify-center text-center space-y-6 border border-[#144b25] rounded-2xl bg-black/20">
                <div className="w-24 h-24 rounded-full bg-[#0b2b14]/30 flex items-center justify-center border border-[#10b981]/20 animate-pulse">
                  <Sparkles className="w-10 h-10 text-[#10b981]" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-light text-white tracking-tight">Cosmic Blueprint Loading</h2>
                  <p className="text-[#e0d8d0]/60 max-w-sm mx-auto text-sm">
                    Select an Astro-Databank profile on the left to compute and map their birth details.
                  </p>
                </div>
              </div>
            ) : (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="bg-[#040e06]/85 border border-[#144b25] p-2 rounded-xl w-full flex justify-between overflow-x-auto">
                  <TabsTrigger value="chart" className="flex-1 py-3.5 rounded-lg text-[#e0d8d0]/60 data-[state=active]:bg-[#10b981] data-[state=active]:text-black hover:text-white transition-all text-sm md:text-base font-bold cursor-pointer">
                    <Map className="w-4 h-4 mr-1.5 inline" /> Kundli
                  </TabsTrigger>
                  <TabsTrigger value="planets" className="flex-1 py-3.5 rounded-lg text-[#e0d8d0]/60 data-[state=active]:bg-[#10b981] data-[state=active]:text-black hover:text-white transition-all text-sm md:text-base font-bold cursor-pointer">
                    <Sun className="w-4 h-4 mr-1.5 inline" /> Planets
                  </TabsTrigger>
                  <TabsTrigger value="dasa" className="flex-1 py-3.5 rounded-lg text-[#e0d8d0]/60 data-[state=active]:bg-[#10b981] data-[state=active]:text-black hover:text-white transition-all text-sm md:text-base font-bold cursor-pointer">
                    <Moon className="w-4 h-4 mr-1.5 inline" /> Dasa
                  </TabsTrigger>
                  <TabsTrigger value="significators" className="flex-1 py-3.5 rounded-lg text-[#e0d8d0]/60 data-[state=active]:bg-[#10b981] data-[state=active]:text-black hover:text-white transition-all text-sm md:text-base font-bold cursor-pointer">
                    <Info className="w-4 h-4 mr-1.5 inline" /> Significators
                  </TabsTrigger>
                  <TabsTrigger value="insights" className="flex-1 py-3.5 rounded-lg text-[#e0d8d0]/60 data-[state=active]:bg-[#10b981] data-[state=active]:text-black hover:text-white transition-all text-sm md:text-base font-bold cursor-pointer">
                    <Sparkles className="w-4 h-4 mr-1.5 inline" /> AI Insights
                  </TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab + (activeProfile?.id || '')}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <TabsContent value="chart" className="mt-0 flex flex-col items-center">
                      <div className="w-full max-w-[760px]">
                        <KundliChart 
                          title="Lagna Chart (D1) - South Indian style" 
                          planets={planets} 
                          ascendant={ascendant} 
                          houses={houses}
                          type="south"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="planets" className="mt-0">
                      <Card className="bg-[#0b1c0e]/80 border-[#144b25] backdrop-blur-sm rounded-xl">
                        <CardHeader>
                          <CardTitle className="text-white text-base md:text-lg">Planetary Positions</CardTitle>
                          <CardDescription className="text-[#e0d8d0]/60 text-xs md:text-sm">Detailed coordinates and nakshatra placements</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <PlanetaryTable planets={planets} />
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="dasa" className="mt-0">
                      <Card className="bg-[#0b1c0e]/80 border-[#144b25] backdrop-blur-sm rounded-xl">
                        <CardHeader>
                          <CardTitle className="text-white text-base md:text-lg">Vimshottari Dasa</CardTitle>
                          <CardDescription className="text-[#e0d8d0]/60 text-xs md:text-sm">Major planetary periods (Mahadasa) computed from Moon position</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <DasaTable dasas={dasas} />
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="significators" className="mt-0">
                      <DasaSignificators 
                        significators={significators} 
                        planetSignificators={planetSignificators}
                        planets={planets} 
                      />
                    </TabsContent>

                    <TabsContent value="insights" className="mt-0">
                      <AIInsights planets={planets} ascendant={ascendant} birthDetails={birthDetails} />
                    </TabsContent>
                  </motion.div>
                </AnimatePresence>
              </Tabs>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-[#144b25] py-8 mt-12 bg-black/40 text-xs text-[#e0d8d0]/40">
        <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 opacity-50">
            <Star className="w-4 h-4 text-[#10b981]" />
            <span className="font-medium">Jyotish Pro Explorer © 2026</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="opacity-50">Powered by astronomy-engine</span>
          </div>
        </div>
      </footer>

      {/* Add Profile Modal */}
      <AddProfileModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProfile={handleAddProfile}
      />
    </div>
  );
}


