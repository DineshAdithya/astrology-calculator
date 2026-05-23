import React, { useState } from 'react';
import { AstroProfile } from '../data/astroDatabank';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, MapPin, Plus, Sparkles } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddProfile: (profile: AstroProfile) => void;
}

export function AddProfileModal({ isOpen, onClose, onAddProfile }: Props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("12:00");
  const [lat, setLat] = useState("0.0");
  const [lon, setLon] = useState("0.0");
  const [tz, setTz] = useState("0.0");
  const [locationName, setLocationName] = useState("");
  const [roddenRating, setRoddenRating] = useState<'AA' | 'A' | 'B' | 'C' | 'DD' | 'XX'>('A');
  const [timeSource, setTimeSource] = useState("User Memory");
  const [biography, setBiography] = useState("");
  const [categoriesStr, setCategoriesStr] = useState("Custom");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !date || !time) return;

    // Parse date parts: YYYY-MM-DD
    const [year, monthStr, day] = date.split('-').map(Number);
    const month = monthStr - 1; // 0-indexed month
    const [hour, minute] = time.split(':').map(Number);

    const categories = categoriesStr
      .split(',')
      .map(c => c.trim())
      .filter(c => c.length > 0);

    const newProfile: AstroProfile = {
      id: `custom-${Date.now()}`,
      name,
      birthDate: { year, month, day, hour, minute },
      latitude: parseFloat(lat) || 0,
      longitude: parseFloat(lon) || 0,
      timezone: parseFloat(tz) || 0,
      locationName: locationName || "Unknown",
      roddenRating,
      timeSource: timeSource || "User Memory",
      biography: biography || `Biography for ${name}.`,
      keyEvents: [
        {
          date: date,
          title: 'Birth',
          description: `Born in ${locationName || "Unknown"} at ${time}.`
        }
      ],
      categories: categories.length > 0 ? categories : ['Custom'],
      sourceUrl: ''
    };

    onAddProfile(newProfile);
    
    // Reset form
    setName("");
    setDate("");
    setTime("12:00");
    setLat("0.0");
    setLon("0.0");
    setTz("0.0");
    setLocationName("");
    setRoddenRating('A');
    setTimeSource("User Memory");
    setBiography("");
    setCategoriesStr("Custom");
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-xl bg-[#031508] border-[#10b981]/30 text-[#e0d8d0] shadow-2xl max-h-[90vh] overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-white text-xl flex items-center gap-2 font-bold">
            <Plus className="w-5 h-5 text-[#10b981]" />
            Add Astro-Databank Profile
          </DialogTitle>
          <DialogDescription className="text-[#e0d8d0]/60">
            Create a custom person with their birth details and biography to calculate their charts side-by-side.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 my-2 text-sm">
          {/* Name & Location */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="cust-name" className="text-xs text-[#e0d8d0]/60 font-semibold">Full Name</Label>
              <Input 
                id="cust-name" 
                required
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="e.g. Nikola Tesla"
                className="bg-black/40 border-[#144b25] focus:border-[#10b981] text-white"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cust-loc" className="text-xs text-[#e0d8d0]/60 font-semibold">Birth Place (City, Country)</Label>
              <Input 
                id="cust-loc" 
                value={locationName} 
                onChange={(e) => setLocationName(e.target.value)} 
                placeholder="e.g. Smiljan, Croatia"
                className="bg-black/40 border-[#144b25] focus:border-[#10b981] text-white"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="cust-date" className="text-xs text-[#e0d8d0]/60 font-semibold">Birth Date</Label>
              <Input 
                id="cust-date" 
                type="date"
                required
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                className="bg-black/40 border-[#144b25] focus:border-[#10b981] text-white scheme-dark"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cust-time" className="text-xs text-[#e0d8d0]/60 font-semibold">Birth Time</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#10b981]" />
                <Input 
                  id="cust-time" 
                  type="time"
                  required
                  value={time} 
                  onChange={(e) => setTime(e.target.value)} 
                  className="pl-9 bg-black/40 border-[#144b25] focus:border-[#10b981] text-white scheme-dark"
                />
              </div>
            </div>
          </div>

          {/* Coordinates */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="cust-lat" className="text-xs text-[#e0d8d0]/60 font-semibold">Latitude (dec deg)</Label>
              <Input 
                id="cust-lat" 
                value={lat} 
                onChange={(e) => setLat(e.target.value)} 
                placeholder="e.g. 44.56"
                className="bg-black/40 border-[#144b25] focus:border-[#10b981] text-white"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cust-lon" className="text-xs text-[#e0d8d0]/60 font-semibold">Longitude (dec deg)</Label>
              <Input 
                id="cust-lon" 
                value={lon} 
                onChange={(e) => setLon(e.target.value)} 
                placeholder="e.g. 15.24"
                className="bg-black/40 border-[#144b25] focus:border-[#10b981] text-white"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cust-tz" className="text-xs text-[#e0d8d0]/60 font-semibold">GMT Offset (hrs)</Label>
              <Input 
                id="cust-tz" 
                value={tz} 
                onChange={(e) => setTz(e.target.value)} 
                placeholder="e.g. 1.0"
                className="bg-black/40 border-[#144b25] focus:border-[#10b981] text-white"
              />
            </div>
          </div>

          {/* Data Quality & Source */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs text-[#e0d8d0]/60 font-semibold">Rodden Rating</Label>
              <Select 
                value={roddenRating} 
                onValueChange={(val: any) => setRoddenRating(val)}
              >
                <SelectTrigger className="bg-black/40 border-[#144b25] focus:border-[#10b981] text-white">
                  <SelectValue placeholder="Select Rating" />
                </SelectTrigger>
                <SelectContent className="bg-[#0b1c0e] border-[#10b981]/30 text-[#e0d8d0]">
                  <SelectItem value="AA">AA (Birth Certificate)</SelectItem>
                  <SelectItem value="A">A (Memory/Biography)</SelectItem>
                  <SelectItem value="B">B (Biography/Diary)</SelectItem>
                  <SelectItem value="C">C (Rectified/Unverified)</SelectItem>
                  <SelectItem value="DD">DD (Dirty/Conflicting Data)</SelectItem>
                  <SelectItem value="XX">XX (Unknown Time)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cust-src" className="text-xs text-[#e0d8d0]/60 font-semibold">Time Source</Label>
              <Input 
                id="cust-src" 
                value={timeSource} 
                onChange={(e) => setTimeSource(e.target.value)} 
                placeholder="e.g. Birth certificate in biography"
                className="bg-black/40 border-[#144b25] focus:border-[#10b981] text-white"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-1.5">
            <Label htmlFor="cust-cats" className="text-xs text-[#e0d8d0]/60 font-semibold">Categories (comma-separated)</Label>
            <Input 
              id="cust-cats" 
              value={categoriesStr} 
              onChange={(e) => setCategoriesStr(e.target.value)} 
              placeholder="e.g. Science, Inventor, Mystic"
              className="bg-black/40 border-[#144b25] focus:border-[#10b981] text-white"
            />
          </div>

          {/* Biography */}
          <div className="space-y-1.5">
            <Label htmlFor="cust-bio" className="text-xs text-[#e0d8d0]/60 font-semibold">Biography & Life Story (Markdown supported)</Label>
            <textarea 
              id="cust-bio" 
              rows={4}
              value={biography} 
              onChange={(e) => setBiography(e.target.value)} 
              placeholder="Write their life story, career, achievements, and other interesting facts..."
              className="w-full rounded-md p-2 text-sm bg-black/40 border border-[#144b25] focus:border-[#10b981] focus:outline-none text-white font-sans"
            />
          </div>

          <DialogFooter className="pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-[#144b25] hover:bg-[#10b981]/10 text-white cursor-pointer"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-[#10b981] hover:bg-[#059669] text-white cursor-pointer"
            >
              <Sparkles className="w-4 h-4 mr-2" /> Add Profile
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
