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

export function DasaSignificators({ significators, planetSignificators, planets }: Props) {
  const mainPlanets = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];

  return (
    <div className="space-y-8">
      <Card className="bg-white border-gray-200 shadow-2xl overflow-hidden">
        <CardHeader className="pb-4 bg-gray-50 border-b">
          <CardTitle className="text-lg font-bold text-black uppercase tracking-widest text-center">House Significators (Nangu Padi Kurikatigal)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow className="border-b border-gray-200">
                <TableHead className="text-black font-bold text-center w-20">House</TableHead>
                <TableHead className="text-black font-bold text-center">Step 1</TableHead>
                <TableHead className="text-black font-bold text-center">Step 2</TableHead>
                <TableHead className="text-black font-bold text-center">Step 3</TableHead>
                <TableHead className="text-black font-bold text-center">Step 4</TableHead>
                <TableHead className="text-black font-bold text-center bg-yellow-50">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {significators.map((sig) => (
                <TableRow key={sig.house} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <TableCell className="text-center font-black text-blue-800 text-lg">{sig.house}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {sig.level1.map(p => (
                        <span key={p} className="text-sm font-bold text-red-600">{planetTamil[p] || p.substring(0, 2)}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {sig.level2.map(p => (
                        <span key={p} className="text-sm font-bold text-blue-700">{planetTamil[p] || p.substring(0, 2)}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {sig.level3.map(p => (
                        <span key={p} className="text-sm font-bold text-orange-600">{planetTamil[p] || p.substring(0, 2)}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {sig.level4.map(p => (
                        <span key={p} className="text-sm font-bold text-black">{planetTamil[p] || p.substring(0, 2)}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center bg-yellow-50/30">
                    <div className="flex flex-wrap justify-center gap-1">
                      {sig.all.map(p => (
                        <span key={p} className="text-base font-black text-gray-900">{planetTamil[p] || p.substring(0, 2)}</span>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 bg-gray-50 text-xs text-gray-600 italic">
            <p>Step 1: Planets in Star of Occupant | Step 2: Occupant | Step 3: Planets in Star of Owner | Step 4: Owner</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-gray-200 shadow-2xl overflow-hidden max-w-4xl mx-auto">
        <CardHeader className="pb-4 bg-gray-50 border-b">
          <CardTitle className="text-lg font-bold text-black uppercase tracking-widest text-center">Planet Significators (4-Step Theory)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow className="border-b border-gray-200">
                <TableHead className="text-black font-bold text-center">Planet</TableHead>
                <TableHead className="text-black font-bold text-center">Step 1</TableHead>
                <TableHead className="text-black font-bold text-center">Step 2</TableHead>
                <TableHead className="text-black font-bold text-center">Step 3</TableHead>
                <TableHead className="text-black font-bold text-center">Step 4</TableHead>
                <TableHead className="text-black font-bold text-center bg-yellow-50">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {planetSignificators.map((sig) => (
                <TableRow key={sig.planet} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <TableCell className="text-center font-black text-lg">
                    <span className={cn(
                      sig.planet === "Sun" ? "text-red-600" : 
                      sig.planet === "Jupiter" || sig.planet === "Saturn" ? "text-blue-700" : 
                      sig.planet === "Mars" ? "text-orange-600" :
                      "text-black"
                    )}>
                      {planetTamil[sig.planet] || sig.planet.substring(0, 2)}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {sig.step1.map(h => (
                        <span key={h} className="text-sm font-bold text-red-600">{h}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {sig.step2.map(h => (
                        <span key={h} className="text-sm font-bold text-blue-700">{h}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {sig.step3.map(h => (
                        <span key={h} className="text-sm font-bold text-orange-600">{h}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {sig.step4.map(h => (
                        <span key={h} className="text-sm font-bold text-black">{h}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center bg-yellow-50/30">
                    <div className="flex flex-wrap justify-center gap-2">
                      {sig.all.map(h => (
                        <span key={h} className="text-base font-black text-blue-800">{h}</span>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 bg-gray-50 text-xs text-gray-600 italic">
            <p>Step 1: Star Lord's Houses | Step 2: Planet's Houses | Step 3: Sub Lord's Houses | Step 4: Sub Lord's Star Lord's Houses</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
