import { PlanetPosition } from '../lib/astrology';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Props {
  planets: PlanetPosition[];
}

export function PlanetaryTable({ planets }: Props) {
  return (
    <div className="rounded-md border border-[#144b25]/50 overflow-hidden bg-black/20">
      <Table>
        <TableHeader className="bg-[#040e06]/60">
          <TableRow className="border-[#144b25]/40 hover:bg-transparent text-sm md:text-base">
            <TableHead className="text-emerald-400 font-black">Planet</TableHead>
            <TableHead className="text-emerald-400 font-black">Rashi</TableHead>
            <TableHead className="text-emerald-400 font-black">Degree</TableHead>
            <TableHead className="text-emerald-400 font-black">Nakshatra</TableHead>
            <TableHead className="text-emerald-400 font-black">Star Lord</TableHead>
            <TableHead className="text-emerald-400 font-black">Sub Lord</TableHead>
            <TableHead className="text-emerald-400 font-black">Pada</TableHead>
            <TableHead className="text-emerald-400 font-black">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[#e0d8d0] text-base md:text-lg">
          {planets.map((planet) => (
            <TableRow key={planet.name} className="border-[#144b25]/30 hover:bg-[#10b981]/10 transition-colors">
              <TableCell className="font-black text-white">{planet.name}</TableCell>
              <TableCell className="text-[#e0d8d0]/80">{planet.rashi}</TableCell>
              <TableCell className="text-[#e0d8d0]/80 font-mono">{planet.rashiDegree.toFixed(2)}°</TableCell>
              <TableCell className="text-[#e0d8d0]/80">{planet.nakshatra}</TableCell>
              <TableCell className="text-[#e0d8d0]/80">{planet.nakshatraLord}</TableCell>
              <TableCell className="text-[#e0d8d0]/80 font-black text-emerald-300">{planet.subLord}</TableCell>
              <TableCell className="text-[#e0d8d0]/80 font-mono">{planet.nakshatraPada}</TableCell>
              <TableCell>
                {planet.isRetrograde ? (
                  <Badge variant="outline" className="text-amber-400 border-amber-400/50 bg-amber-400/10 font-bold text-xs px-2.5 py-0.5">Retrograde</Badge>
                ) : (
                  <Badge variant="outline" className="text-emerald-400 border-emerald-400/50 bg-emerald-400/10 font-bold text-xs px-2.5 py-0.5">Direct</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

