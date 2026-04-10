import { PlanetPosition, HouseCusp } from '../lib/astrology';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  planets: PlanetPosition[];
  ascendant: number;
  houses?: HouseCusp[];
  type: 'north' | 'south';
}

export function KundliChart({ title, planets, ascendant, houses = [], type }: Props) {
  const ascRashi = Math.floor(ascendant / 30) + 1;

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
      <div className="grid grid-cols-4 gap-0 aspect-square w-full border-4 border-[#eab308] bg-white shadow-xl">
        {signs.map((sign, i) => (
          <div 
            key={i} 
            className={cn(
              "border border-[#eab308] flex flex-col items-center justify-start p-2 min-h-[140px] relative transition-colors hover:bg-yellow-50",
              sign === null ? "bg-white border-none" : "bg-white"
            )}
          >
            {sign !== null && (
              <>
                <div className="flex flex-col items-start gap-1 w-full overflow-y-auto scrollbar-hide">
                  {rashiItems[sign]?.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between w-full px-1">
                      <span className={cn(
                        "text-[16px] font-black",
                        item.type === 'house' ? "text-blue-800" :
                        item.name === "Sun" ? "text-red-600" : 
                        item.name === "Jupiter" || item.name === "Saturn" ? "text-blue-700" : 
                        item.name === "Mars" ? "text-orange-600" :
                        "text-black"
                      )}>
                        {item.type === 'house' ? item.name : (planetTamil[item.name] || item.name.substring(0, 2))}
                      </span>
                      <span className="text-[14px] text-gray-500 font-mono font-bold">
                        {formatDegree(item.degree)}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {/* Center portion is empty */}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className="bg-white border-gray-200 shadow-2xl overflow-hidden">
      <CardHeader className="pb-4 bg-gray-50 border-b">
        <CardTitle className="text-lg font-bold text-black uppercase tracking-widest text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {renderSouthIndian()}
      </CardContent>
    </Card>
  );
}
