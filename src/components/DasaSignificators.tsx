import React from 'react';
import { HouseSignificators, PlanetPosition, PlanetSignificators } from '../lib/astrology';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Props {
  significators: HouseSignificators[];
  planetSignificators: PlanetSignificators[];
  planets: PlanetPosition[];
}

const planetTamil: Record<string, string> = {
  "Sun": "சூ",
  "Moon": "சந்",
  "Mars": "செ",
  "Mercury": "பு",
  "Jupiter": "கு",
  "Venus": "சு",
  "Saturn": "சனி",
  "Rahu": "ரா",
  "Ketu": "கே",
  "Uranus": "யு",
  "Neptune": "நெ",
  "Pluto": "ப்ளூ"
};

export function DasaSignificators({ significators, planetSignificators }: Props) {
  return (
    <div className="space-y-8 text-[#e0d8d0]">
      <Card className="bg-[#0b1c0e]/80 border-[#144b25] backdrop-blur-md shadow-2xl overflow-hidden rounded-xl">
        <CardHeader className="pb-4 bg-black/40 border-b border-[#144b25]">
          <CardTitle className="text-base md:text-lg font-black text-white uppercase tracking-widest text-center">House Significators (Nangu Padi Kurikatigal)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-[#040e06]/60">
              <TableRow className="border-b border-[#144b25]/60 hover:bg-transparent text-sm md:text-base">
                <TableHead className="text-emerald-400 font-black text-center w-20">House</TableHead>
                <TableHead className="text-emerald-400 font-black text-center">Step 1</TableHead>
                <TableHead className="text-emerald-400 font-black text-center">Step 2</TableHead>
                <TableHead className="text-emerald-400 font-black text-center">Step 3</TableHead>
                <TableHead className="text-emerald-400 font-black text-center">Step 4</TableHead>
                <TableHead className="text-emerald-400 font-black text-center bg-[#10b981]/10">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {significators.map((sig) => (
                <TableRow key={sig.house} className="border-b border-[#144b25]/30 hover:bg-[#10b981]/5 transition-colors text-base md:text-lg">
                  <TableCell className="text-center font-black text-emerald-400 text-xl md:text-2xl">{sig.house}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {sig.level1.map(p => (
                        <span key={p} className="text-base md:text-lg font-black text-teal-300">{planetTamil[p] || p.substring(0, 2)}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {sig.level2.map(p => (
                        <span key={p} className="text-base md:text-lg font-black text-emerald-300">{planetTamil[p] || p.substring(0, 2)}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {sig.level3.map(p => (
                        <span key={p} className="text-base md:text-lg font-black text-emerald-100">{planetTamil[p] || p.substring(0, 2)}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {sig.level4.map(p => (
                        <span key={p} className="text-base md:text-lg font-black text-white">{planetTamil[p] || p.substring(0, 2)}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center bg-[#10b981]/15 border-l border-r border-[#144b25]/30">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {sig.all.map(p => (
                        <span key={p} className="text-lg md:text-xl font-black text-white">{planetTamil[p] || p.substring(0, 2)}</span>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 bg-black/30 border-t border-[#144b25]/40 text-xs md:text-sm text-[#e0d8d0]/60 italic font-semibold">
            <p>Step 1: Planets in Star of Occupant | Step 2: Occupant | Step 3: Planets in Star of Owner | Step 4: Owner</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#0b1c0e]/80 border-[#144b25] backdrop-blur-md shadow-2xl overflow-hidden rounded-xl">
        <CardHeader className="pb-4 bg-black/40 border-b border-[#144b25]">
          <CardTitle className="text-base md:text-lg font-black text-white uppercase tracking-widest text-center">Planet Significators (4-Step Theory)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-[#040e06]/60">
              <TableRow className="border-b border-[#144b25]/60 hover:bg-transparent text-sm md:text-base">
                <TableHead className="text-emerald-400 font-black text-center">Planet</TableHead>
                <TableHead className="text-emerald-400 font-black text-center">Step 1</TableHead>
                <TableHead className="text-emerald-400 font-black text-center">Step 2</TableHead>
                <TableHead className="text-emerald-400 font-black text-center">Step 3</TableHead>
                <TableHead className="text-emerald-400 font-black text-center">Step 4</TableHead>
                <TableHead className="text-emerald-400 font-black text-center bg-[#10b981]/10">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {planetSignificators.map((sig) => (
                <TableRow key={sig.planet} className="border-b border-[#144b25]/30 hover:bg-[#10b981]/5 transition-colors text-base md:text-lg">
                  <TableCell className="text-center font-black text-lg md:text-xl">
                    <span className={cn(
                      sig.planet === "Sun" ? "text-amber-400" : 
                      sig.planet === "Jupiter" || sig.planet === "Venus" ? "text-[#a7f3d0]" : 
                      sig.planet === "Mars" ? "text-red-400" :
                      "text-[#e0d8d0]"
                    )}>
                      {planetTamil[sig.planet] || sig.planet.substring(0, 2)}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {sig.step1.map(h => (
                        <span key={h} className="text-base md:text-lg font-black text-teal-300">{h}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {sig.step2.map(h => (
                        <span key={h} className="text-base md:text-lg font-black text-emerald-300">{h}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {sig.step3.map(h => (
                        <span key={h} className="text-base md:text-lg font-black text-[#a7f3d0]/75">{h}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {sig.step4.map(h => (
                        <span key={h} className="text-base md:text-lg font-black text-white">{h}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center bg-[#10b981]/15 border-l border-r border-[#144b25]/30">
                    <div className="flex flex-wrap justify-center gap-2">
                      {sig.all.map(h => (
                        <span key={h} className="text-lg md:text-xl font-black text-emerald-400">{h}</span>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 bg-black/30 border-t border-[#144b25]/40 text-xs md:text-sm text-[#e0d8d0]/60 italic font-semibold">
            <p>Step 1: Star Lord's Houses | Step 2: Planet's Houses | Step 3: Sub Lord's Houses | Step 4: Sub Lord's Star Lord's Houses</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

