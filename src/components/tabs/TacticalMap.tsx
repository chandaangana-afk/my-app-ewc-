import { TacticalData } from "@/lib/types";
import { Map } from "lucide-react";
import { useState } from "react";

interface TacticalMapProps {
  data: TacticalData;
}

export default function TacticalMap({ data }: TacticalMapProps) {
  const [selectedMap, setSelectedMap] = useState(data.mapPerformance[0]?.mapName || "Default Map");

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Map className="w-5 h-5 text-cyan-400" />
          Tactical Mapping Board
        </h2>
        <select
          value={selectedMap}
          onChange={(e) => setSelectedMap(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
        >
          {data.mapPerformance.map((map) => (
            <option key={map.mapName} value={map.mapName}>
              {map.mapName}
            </option>
          ))}
        </select>
      </div>

      <div className="relative flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center">
        {/* Dark grid background pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        {/* Tactical Overlay */}
        <div className="relative w-full max-w-2xl aspect-square sm:aspect-video bg-zinc-950/40 rounded-lg border border-zinc-800/80 shadow-2xl overflow-hidden backdrop-blur-sm">
          
          {/* Rotation Paths */}
          {data.rotationPaths && data.rotationPaths.length > 0 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <polyline
                points={data.rotationPaths.map((p) => `${p.x},${p.y}`).join(" ")}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="0.8"
                strokeDasharray="2, 2"
                className="animate-[dash_10s_linear_infinite]"
              />
            </svg>
          )}

          {/* Landing / Drop Zones */}
          {data.landingZones?.map((zone, idx) => (
            <div
              key={`lz-${idx}`}
              className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full border-2 border-cyan-400 bg-cyan-400/20 animate-pulse pointer-events-none"
              style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
            >
              <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-cyan-400" />
            </div>
          ))}

          {/* Choke Points / Warnings */}
          {data.chokePoints?.map((choke, idx) => (
            <div
              key={`cp-${idx}`}
              className="absolute w-6 h-6 -ml-3 -mt-3 rounded-full bg-rose-500/20 pointer-events-none flex items-center justify-center"
              style={{ left: `${choke.x}%`, top: `${choke.y}%` }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-rose-400" />
            </div>
          ))}

          {/* Map Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
            <div className="bg-zinc-950/80 backdrop-blur-md px-3 py-2 rounded border border-zinc-800/50">
              <p className="text-xs text-zinc-400 font-mono">MAP SECURE FEED</p>
              <p className="text-sm font-bold text-cyan-400">{selectedMap.toUpperCase()} OVERLAY</p>
            </div>
            <div className="flex gap-4 bg-zinc-950/80 backdrop-blur-md px-3 py-2 rounded border border-zinc-800/50 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-cyan-400"/> Drop Zone</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-500"/> Danger Choke</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
