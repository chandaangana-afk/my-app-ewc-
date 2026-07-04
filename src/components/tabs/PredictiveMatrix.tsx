import { TacticalData } from "@/lib/types";
import { AlertCircle, Target, TrendingUp } from "lucide-react";

interface PredictiveMatrixProps {
  data: TacticalData;
}

export default function PredictiveMatrix({ data }: PredictiveMatrixProps) {
  // SVG Circle calculations
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (data.winProbability / 100) * circumference;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 h-full overflow-y-auto">
      {/* Win Probability Engine */}
      <div className="bg-zinc-900/40 rounded-2xl border border-zinc-800/50 p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <TrendingUp className="w-24 h-24 text-emerald-500" />
        </div>
        <h3 className="text-sm font-semibold text-zinc-400 mb-8 uppercase tracking-wider">Win Probability Engine</h3>
        
        <div className="relative flex items-center justify-center">
          <svg className="w-40 h-40 transform -rotate-90">
            {/* Background circle */}
            <circle
              className="text-zinc-800"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="80"
              cy="80"
            />
            {/* Progress circle */}
            <circle
              className="text-emerald-500 transition-all duration-1000 ease-out"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="80"
              cy="80"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-emerald-400">{data.winProbability}%</span>
            <span className="text-xs text-zinc-500 mt-1">Predicted</span>
          </div>
        </div>
      </div>

      {/* Point Leak Alerts */}
      <div className="bg-zinc-900/40 rounded-2xl border border-zinc-800/50 p-6">
        <h3 className="text-sm font-semibold text-zinc-400 mb-6 uppercase tracking-wider flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          Point Leak Alerts
        </h3>
        
        <div className="flex flex-col gap-3">
          {data.pointLeakAlerts.map((alert, idx) => (
            <div key={idx} className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-3 flex items-start gap-3">
              <div className="mt-0.5">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              </div>
              <p className="text-sm text-rose-200/90 leading-snug">{alert}</p>
            </div>
          ))}
          {data.pointLeakAlerts.length === 0 && (
            <p className="text-sm text-zinc-500 italic">No major point leaks detected.</p>
          )}
        </div>
      </div>

      {/* Map Performance Index */}
      <div className="bg-zinc-900/40 rounded-2xl border border-zinc-800/50 p-6">
        <h3 className="text-sm font-semibold text-zinc-400 mb-6 uppercase tracking-wider flex items-center gap-2">
          <Target className="w-4 h-4 text-cyan-400" />
          Map Performance Index
        </h3>
        
        <div className="space-y-5">
          {data.mapPerformance.sort((a, b) => b.score - a.score).map((map) => (
            <div key={map.mapName} className="relative">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-zinc-300">{map.mapName}</span>
                <span className="text-emerald-400 font-medium">{map.winRate}% WR</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500/50 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${map.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
