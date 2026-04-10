import React, { useState } from 'react';
import { BirthDetails } from '../lib/astrology';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  onCalculate: (details: BirthDetails) => void;
}

export function BirthDetailsForm({ onCalculate }: Props) {
  const [name, setName] = useState("User");
  const [date, setDate] = useState<Date | undefined>(new Date(2000, 2, 8)); // March 8, 2000
  const [time, setTime] = useState("11:55");
  const [lat, setLat] = useState("10.7661"); // Thiruvarur
  const [lon, setLon] = useState("79.6344");
  const [tz, setTz] = useState("5.5");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;

    const [hours, minutes] = time.split(':').map(Number);
    const birthDate = new Date(date);
    birthDate.setHours(hours, minutes);

    onCalculate({
      date: birthDate,
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
      timezone: parseFloat(tz)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[#e0d8d0]/60">Full Name</Label>
        <Input 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter name"
          className="bg-black/20 border-[#e0d8d0]/10 focus:border-[#ff4e00] text-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-[#e0d8d0]/60">Birth Date</Label>
          <Popover>
            <PopoverTrigger>
              <div
                className={cn(
                  "w-full flex items-center justify-start text-left font-normal bg-black/20 border border-[#e0d8d0]/10 hover:bg-black/40 text-white p-2 rounded-md cursor-pointer",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-[#ff4e00]" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-[#1a1614] border-[#e0d8d0]/10">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="text-[#e0d8d0]"
                captionLayout="dropdown"
                startMonth={new Date(1900, 0)}
                endMonth={new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time" className="text-[#e0d8d0]/60">Birth Time</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#ff4e00]" />
            <Input 
              id="time" 
              type="time"
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              className="pl-10 bg-black/20 border-[#e0d8d0]/10 focus:border-[#ff4e00] text-white"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="lat" className="text-[#e0d8d0]/60">Latitude</Label>
          <Input 
            id="lat" 
            value={lat} 
            onChange={(e) => setLat(e.target.value)} 
            className="bg-black/20 border-[#e0d8d0]/10 focus:border-[#ff4e00] text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lon" className="text-[#e0d8d0]/60">Longitude</Label>
          <Input 
            id="lon" 
            value={lon} 
            onChange={(e) => setLon(e.target.value)} 
            className="bg-black/20 border-[#e0d8d0]/10 focus:border-[#ff4e00] text-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tz" className="text-[#e0d8d0]/60">Timezone (GMT Offset)</Label>
        <Input 
          id="tz" 
          value={tz} 
          onChange={(e) => setTz(e.target.value)} 
          className="bg-black/20 border-[#e0d8d0]/10 focus:border-[#ff4e00] text-white"
        />
      </div>

      <Button type="submit" className="w-full bg-[#ff4e00] hover:bg-[#e64600] text-white font-bold py-6 rounded-xl shadow-lg shadow-[#ff4e00]/20 transition-all active:scale-95">
        Generate Kundli
      </Button>
    </form>
  );
}
