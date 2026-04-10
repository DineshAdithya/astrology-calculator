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
import { BirthDetailsForm } from './components/BirthDetailsForm';
import { KundliChart } from './components/KundliChart';
import { PlanetaryTable } from './components/PlanetaryTable';
import { DasaTable } from './components/DasaTable';
import { DasaSignificators } from './components/DasaSignificators';
import { AIInsights } from './components/AIInsights';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Moon, Sun, Star, Map, Info, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [birthDetails, setBirthDetails] = useState<BirthDetails | null>(null);
  const [planets, setPlanets] = useState<PlanetPosition[]>([]);
  const [ascendant, setAscendant] = useState<number>(0);
  const [houses, setHouses] = useState<HouseCusp[]>([]);
  const [dasas, setDasas] = useState<DasaPeriod[]>([]);
  const [significators, setSignificators] = useState<HouseSignificators[]>([]);
  const [planetSignificators, setPlanetSignificators] = useState<PlanetSignificators[]>([]);
  const [activeTab, setActiveTab] = useState("chart");

  const handleCalculate = (details: BirthDetails) => {
    setBirthDetails(details);
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
  };

  // Auto-calculate for Thiruvarur details on mount
  useEffect(() => {
    const defaultDetails: BirthDetails = {
      date: new Date(2000, 2, 8, 11, 55),
      latitude: 10.7661,
      longitude: 79.6344,
      timezone: 5.5
    };
    handleCalculate(defaultDetails);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0502] text-[#e0d8d0] font-sans selection:bg-[#ff4e00] selection:text-white">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#3a1510] blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#ff4e00] blur-[150px] opacity-20" />
      </div>

      <header className="relative z-10 border-b border-[#e0d8d0]/10 bg-black/40 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff4e00] to-[#3a1510] flex items-center justify-center shadow-lg shadow-[#ff4e00]/20">
              <Star className="text-white w-6 h-6 fill-current" />
            </div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-[#e0d8d0]/60 bg-clip-text text-transparent">
              Jyotish Pro
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#e0d8d0]/60">
            <a href="#" className="hover:text-[#ff4e00] transition-colors">Horoscope</a>
            <a href="#" className="hover:text-[#ff4e00] transition-colors">Matchmaking</a>
            <a href="#" className="hover:text-[#ff4e00] transition-colors">Consultation</a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Input Form */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-black/40 border-[#e0d8d0]/10 backdrop-blur-sm shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Map className="w-5 h-5 text-[#ff4e00]" />
                    Birth Details
                  </CardTitle>
                  <CardDescription className="text-[#e0d8d0]/60">
                    Enter your birth information to generate your Kundli
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BirthDetailsForm onCalculate={handleCalculate} />
                </CardContent>
              </Card>
            </motion.div>

            {birthDetails && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#3a1510]/40 to-transparent border border-[#ff4e00]/20"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#ff4e00] mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-[#e0d8d0]/40 uppercase">Ascendant</p>
                    <p className="text-lg font-medium text-white">
                      {Math.floor(ascendant / 30) + 1} Rashi
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-[#e0d8d0]/40 uppercase">Moon Sign</p>
                    <p className="text-lg font-medium text-white">
                      {planets.find(p => p.name === "Moon")?.rashi || "N/A"}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {!birthDetails ? (
              <div className="h-[600px] flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-24 h-24 rounded-full bg-[#3a1510]/30 flex items-center justify-center border border-[#ff4e00]/20 animate-pulse">
                  <Sparkles className="w-10 h-10 text-[#ff4e00]" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-light text-white tracking-tight">Your Cosmic Blueprint Awaits</h2>
                  <p className="text-[#e0d8d0]/60 max-w-md mx-auto">
                    Fill in your birth details to unlock personalized astrological insights, charts, and predictions.
                  </p>
                </div>
              </div>
            ) : (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="bg-black/60 border border-[#e0d8d0]/20 p-1 rounded-xl">
                  <TabsTrigger value="chart" className="rounded-lg text-[#e0d8d0]/60 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white hover:text-white transition-all">
                    <Map className="w-4 h-4 mr-2" /> Kundli
                  </TabsTrigger>
                  <TabsTrigger value="planets" className="rounded-lg text-[#e0d8d0]/60 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white hover:text-white transition-all">
                    <Sun className="w-4 h-4 mr-2" /> Planets
                  </TabsTrigger>
                  <TabsTrigger value="dasa" className="rounded-lg text-[#e0d8d0]/60 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white hover:text-white transition-all">
                    <Moon className="w-4 h-4 mr-2" /> Dasa
                  </TabsTrigger>
                  <TabsTrigger value="significators" className="rounded-lg text-[#e0d8d0]/60 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white hover:text-white transition-all">
                    <Info className="w-4 h-4 mr-2" /> Significators
                  </TabsTrigger>
                  <TabsTrigger value="insights" className="rounded-lg text-[#e0d8d0]/60 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white hover:text-white transition-all">
                    <Sparkles className="w-4 h-4 mr-2" /> AI Insights
                  </TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TabsContent value="chart" className="mt-0">
                      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
                        <KundliChart 
                          title="Lagna Chart (D1)" 
                          planets={planets} 
                          ascendant={ascendant} 
                          houses={houses}
                          type="south"
                        />
                        <KundliChart 
                          title="Navamsa Chart (D9)" 
                          planets={planets} 
                          ascendant={ascendant} 
                          houses={houses}
                          type="south"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="planets" className="mt-0">
                      <Card className="bg-black/40 border-[#e0d8d0]/10 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-white">Planetary Positions</CardTitle>
                          <CardDescription className="text-[#e0d8d0]/60">Detailed coordinates and nakshatra placements</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <PlanetaryTable planets={planets} />
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="dasa" className="mt-0">
                      <Card className="bg-black/40 border-[#e0d8d0]/10 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-white">Vimshottari Dasa</CardTitle>
                          <CardDescription className="text-[#e0d8d0]/60">Major planetary periods (Mahadasa)</CardDescription>
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
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-[#e0d8d0]/10 py-12 mt-12 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 opacity-50">
            <Star className="w-5 h-5" />
            <span className="text-sm font-medium">Jyotish Pro © 2026</span>
          </div>
          <div className="flex gap-8 text-sm text-[#e0d8d0]/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
