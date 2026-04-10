import { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { PlanetPosition, BirthDetails } from '../lib/astrology';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, Loader2, BrainCircuit, MessageSquareText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Props {
  planets: PlanetPosition[];
  ascendant: number;
  birthDetails: BirthDetails;
}

export function AIInsights({ planets, ascendant, birthDetails }: Props) {
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateInsight = async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      
      const prompt = `
        As an expert Vedic Astrologer, analyze this birth chart and provide detailed insights.
        
        Birth Details:
        - Date: ${birthDetails.date.toISOString()}
        - Latitude: ${birthDetails.latitude}, Longitude: ${birthDetails.longitude}
        - Ascendant: ${Math.floor(ascendant / 30) + 1} Rashi
        
        Planetary Positions:
        ${planets.map(p => `- ${p.name}: ${p.rashi} at ${p.rashiDegree.toFixed(2)}°, Nakshatra: ${p.nakshatra}`).join('\n')}
        
        Please provide:
        1. Personality Analysis based on Ascendant and Moon sign.
        2. Key Life Themes based on planetary placements.
        3. Career and Wealth prospects.
        4. Relationships and Health.
        5. Current Dasa influence (if possible to infer).
        
        Format the response in clean Markdown with clear headings. Use a professional yet empathetic tone.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      setInsight(response.text || "No insight generated.");
    } catch (err: any) {
      console.error(err);
      setError("Failed to generate insights. Please check your API key or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {!insight && !loading && (
        <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-[#ff4e00]/20 rounded-3xl bg-black/20 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#ff4e00]/10 flex items-center justify-center">
            <BrainCircuit className="w-8 h-8 text-[#ff4e00]" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-white">AI Astrological Analysis</h3>
            <p className="text-[#e0d8d0]/60 max-w-sm">
              Our advanced AI can analyze your unique planetary configuration to provide deep personal insights.
            </p>
          </div>
          <Button 
            onClick={generateInsight} 
            className="bg-[#ff4e00] hover:bg-[#e64600] text-white px-8 py-6 rounded-xl shadow-lg shadow-[#ff4e00]/20"
          >
            <Sparkles className="w-4 h-4 mr-2" /> Generate My Insights
          </Button>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center p-20 space-y-4">
          <Loader2 className="w-10 h-10 text-[#ff4e00] animate-spin" />
          <p className="text-[#e0d8d0]/60 animate-pulse">Consulting the stars...</p>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      {insight && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquareText className="w-5 h-5 text-[#ff4e00]" />
              <h3 className="text-lg font-medium text-white">Your Cosmic Reading</h3>
            </div>
            <Button 
              variant="outline" 
              onClick={generateInsight} 
              disabled={loading}
              className="text-xs border-[#e0d8d0]/10 hover:bg-[#ff4e00]/10"
            >
              {loading ? "Regenerating..." : "Regenerate"}
            </Button>
          </div>
          
          <ScrollArea className="h-[600px] rounded-2xl border border-[#e0d8d0]/10 bg-black/40 p-8">
            <div className="prose prose-invert prose-orange max-w-none">
              <ReactMarkdown>{insight}</ReactMarkdown>
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
