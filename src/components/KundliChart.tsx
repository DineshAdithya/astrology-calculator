import { PlanetPosition, HouseCusp } from '../lib/astrology';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  planets: PlanetPosition[];
  ascendant: number;
  houses?: HouseCusp[];
  type: 'north' | 'south';
}

export function KundliChart({ title, planets, ascendant, houses = [] }: Props) {
  const renderSouthIndian = () => {
    // South Indian chart uses signs fixed in position, houses rotate
    // Signs start from Aries (top row, second from left) clockwise
    const signs = [12, 1, 2, 3, 11, null, null, 4, 10, null, null, 5, 9, 8, 7, 6];
    
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

    const formatDegree = (deg: number) => {
      const d = Math.floor(deg);
      const m = Math.floor((deg - d) * 60);
      return `${d}°${m.toString().padStart(2, '0')}`;
    };

    // Group all items (planets and houses) by rashi
    const rashiItems: Record<number, { type: 'planet' | 'house', name: string, degree: number }[]> = {};
    
    planets.forEach(p => {
      const rashi = Math.floor(p.siderealLongitude / 30) + 1;
      if (!rashiItems[rashi]) rashiItems[rashi] = [];
      rashiItems[rashi].push({ type: 'planet', name: p.name, degree: p.rashiDegree });
    });

    houses.forEach(h => {
      const rashi = Math.floor(h.siderealLongitude / 30) + 1;
      if (!rashiItems[rashi]) rashiItems[rashi] = [];
      rashiItems[rashi].push({ type: 'house', name: h.roman, degree: h.rashiDegree });
    });

    // Sort items in each rashi by degree
    Object.keys(rashiItems).forEach(rashiStr => {
      const rashi = parseInt(rashiStr);
      const items = rashiItems[rashi];
      if (rashi >= 7 && rashi <= 12) {
        // Libra (7) to Pisces (12): Descending order
        items.sort((a, b) => b.degree - a.degree);
      } else {
        // Aries (1) to Virgo (6): Ascending order
        items.sort((a, b) => a.degree - b.degree);
      }
    });

    return (
      <div className="grid grid-cols-4 gap-0 aspect-square w-full border-4 border-[#10b981] bg-[#020d04] shadow-2xl rounded-lg overflow-hidden">
        {signs.map((sign, i) => (
          <div 
            key={i} 
            className={cn(
              "border border-[#14532d]/40 flex flex-col items-center justify-start p-2.5 md:p-4 min-h-[120px] md:min-h-[170px] relative transition-colors hover:bg-[#10b981]/5",
              sign === null ? "bg-[#041609]/40 border-[#14532d]/20" : "bg-[#020e04]"
            )}
          >
            {sign !== null && (
              <div className="flex flex-col items-start gap-2 w-full h-full overflow-y-auto scrollbar-hide">
                {rashiItems[sign]?.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between w-full px-0.5 gap-2">
                    <span className={cn(
                      "text-lg md:text-2xl font-black tracking-tight",
                      item.type === 'house' ? "text-emerald-400/90 font-serif text-base md:text-xl" :
                      item.name === "Sun" ? "text-amber-400" : 
                      item.name === "Jupiter" || item.name === "Venus" ? "text-emerald-300" : 
                      item.name === "Mars" ? "text-red-400" :
                      item.name === "Moon" ? "text-zinc-200" :
                      "text-[#e0d8d0]"
                    )}>
                      {item.type === 'house' ? item.name : (planetTamil[item.name] || item.name.substring(0, 2))}
                    </span>
                    <span className="text-xs md:text-sm text-zinc-400 font-mono font-black">
                      {formatDegree(item.degree)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className="bg-[#0b1c0e]/80 border-[#144b25] backdrop-blur-md shadow-2xl overflow-hidden rounded-xl">
      <CardHeader className="pb-4 bg-black/40 border-b border-[#144b25]">
        <CardTitle className="text-base md:text-lg font-black text-white uppercase tracking-widest text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6 flex items-center justify-center">
        {renderSouthIndian()}
      </CardContent>
    </Card>
  );
}

