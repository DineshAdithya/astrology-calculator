import { PlanetPosition } from '../lib/astrology';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Props {
  planets: PlanetPosition[];
}

export function PlanetaryTable({ planets }: Props) {
  return (
    <div className="rounded-md border border-[#e0d8d0]/10">
      <Table>
        <TableHeader className="bg-black/20">
          <TableRow className="border-[#e0d8d0]/10 hover:bg-transparent">
            <TableHead className="text-[#e0d8d0]/60">Planet</TableHead>
            <TableHead className="text-[#e0d8d0]/60">Rashi</TableHead>
            <TableHead className="text-[#e0d8d0]/60">Degree</TableHead>
            <TableHead className="text-[#e0d8d0]/60">Nakshatra</TableHead>
            <TableHead className="text-[#e0d8d0]/60">Star Lord</TableHead>
            <TableHead className="text-[#e0d8d0]/60">Sub Lord</TableHead>
            <TableHead className="text-[#e0d8d0]/60">Pada</TableHead>
            <TableHead className="text-[#e0d8d0]/60">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {planets.map((planet) => (
            <TableRow key={planet.name} className="border-[#e0d8d0]/10 hover:bg-[#ff4e00]/5 transition-colors">
              <TableCell className="font-medium text-white">{planet.name}</TableCell>
              <TableCell className="text-[#e0d8d0]/80">{planet.rashi}</TableCell>
              <TableCell className="text-[#e0d8d0]/80">{planet.rashiDegree.toFixed(2)}°</TableCell>
              <TableCell className="text-[#e0d8d0]/80">{planet.nakshatra}</TableCell>
              <TableCell className="text-[#e0d8d0]/80">{planet.nakshatraLord}</TableCell>
              <TableCell className="text-[#e0d8d0]/80">{planet.subLord}</TableCell>
              <TableCell className="text-[#e0d8d0]/80">{planet.nakshatraPada}</TableCell>
              <TableCell>
                {planet.isRetrograde ? (
                  <Badge variant="outline" className="text-orange-400 border-orange-400/50">Retrograde</Badge>
                ) : (
                  <Badge variant="outline" className="text-green-400 border-green-400/50">Direct</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
