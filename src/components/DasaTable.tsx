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
    if (path.length === 0) return "விம்ஷோதரி தசை";
    if (path.length === 1) return "விம்ஷோதரி புத்தி";
    if (path.length === 2) return "விம்ஷோதரி அந்தரம்";
    return "விம்ஷோதரி சூட்சமம்";
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
    <div className="bg-white text-black min-h-[500px] flex flex-col shadow-inner rounded-xl overflow-hidden border border-gray-200">
      <div className="p-6 text-center border-b border-gray-100 bg-gray-50/30">
        <h2 className="text-xl font-bold text-gray-800 tracking-wide">{getTitle()}</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-100">
          {currentList.map((dasa, i) => (
            <div 
              key={`${dasa.lord}-${i}`}
              onClick={() => handleRowClick(dasa)}
              className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <span className="text-lg font-bold text-gray-900">
                {getLabel(dasa)}
              </span>
              <span className="text-lg font-medium text-gray-700 font-mono">
                {format(dasa.end, "dd/MM/yyyy")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-6 border-t border-gray-100 bg-gray-50/50">
        {path.length > 0 && (
          <Button 
            onClick={handleBack}
            className="w-full bg-[#ff6b00] hover:bg-[#e66000] text-white font-bold py-6 rounded-lg text-lg shadow-md transition-all active:scale-95"
          >
            பின் செல்லவும்
          </Button>
        )}

        <div className="text-sm text-gray-600 leading-relaxed font-medium">
          <p className="mb-1">
            <span className="font-bold">குறிப்பு:-</span> தரப்பட்ட தேதிகள் தசா முடியும் தேதிகளாகும்.
          </p>
          <p>அந்தர்தாஷாவைக் காட்ட எந்த வரிசையையும் தட்டவும்.</p>
        </div>
      </div>
    </div>
  );
}
