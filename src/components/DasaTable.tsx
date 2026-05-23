import React, { useState } from 'react';
import { format } from 'date-fns';
import { DasaPeriod } from '../lib/astrology';
import { Button } from "@/components/ui/button";

interface Props {
  dasas: DasaPeriod[];
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
  "Ketu": "கே"
};

export function DasaTable({ dasas }: Props) {
  const [path, setPath] = useState<DasaPeriod[]>([]);

  const currentList = path.length === 0 
    ? dasas 
    : path[path.length - 1].subPeriods || [];

  const getTitle = () => {
    if (path.length === 0) return "விம்ஷோதரி தசை (Mahadasa)";
    if (path.length === 1) return "விம்ஷோதரி புத்தி (Bhukti)";
    if (path.length === 2) return "விம்ஷோதரி அந்தரம் (Antara)";
    return "விம்ஷோதரி சூட்சமம் (Prana)";
  };

  const getLabel = (dasa: DasaPeriod) => {
    const lords = [...path, dasa].map(p => planetTamil[p.lord] || p.lord);
    return lords.join('/');
  };

  const handleRowClick = (dasa: DasaPeriod) => {
    if (dasa.subPeriods && dasa.subPeriods.length > 0 && path.length < 3) {
      setPath([...path, dasa]);
    }
  };

  const handleBack = () => {
    setPath(path.slice(0, -1));
  };

  return (
    <div className="bg-[#0b1c0e]/80 text-[#e0d8d0] min-h-[500px] flex flex-col shadow-2xl rounded-xl overflow-hidden border border-[#144b25] backdrop-blur-md">
      <div className="p-6 text-center border-b border-[#144b25] bg-black/40">
        <h2 className="text-2xl font-black text-white tracking-wide">{getTitle()}</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-[#144b25]/30">
          {currentList.map((dasa, i) => (
            <div 
              key={`${dasa.lord}-${i}`}
              onClick={() => handleRowClick(dasa)}
              className="flex items-center justify-between p-6 hover:bg-[#10b981]/10 cursor-pointer transition-colors"
            >
              <span className="text-xl md:text-2xl font-black text-white">
                {getLabel(dasa)}
              </span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 font-mono">
                {format(dasa.end, "dd/MM/yyyy")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-6 border-t border-[#144b25] bg-black/20">
        {path.length > 0 && (
          <Button 
            onClick={handleBack}
            className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-black py-7 rounded-lg text-xl shadow-md transition-all active:scale-95 cursor-pointer"
          >
            பின் செல்லவும் (Go Back)
          </Button>
        )}

        <div className="text-sm md:text-base text-[#e0d8d0]/65 leading-relaxed font-medium">
          <p className="mb-1">
            <span className="font-bold text-[#10b981]">Note:</span> The dates listed are the end dates of each period.
          </p>
          <p>Tap any row to view its sub-periods (Bhukti, Antara).</p>
        </div>
      </div>
    </div>
  );
}

