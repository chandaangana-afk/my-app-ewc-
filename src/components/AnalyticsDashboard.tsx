import { Team } from '../data/types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';

interface AnalyticsDashboardProps {
  team: Team;
}

export function AnalyticsDashboard({ team }: AnalyticsDashboardProps) {
  // Aggregate top weapons across all players for the chart
  const weaponStats = team.roster.flatMap(p => p.topWeapons.map(w => ({
    player: p.ign,
    weapon: w.name,
    efficiency: w.efficiency
  }))).slice(0, 10); // Show top 10

  return (
    <div className="p-8 w-full max-w-7xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Team Analytics: <span className="text-cyan-400">{team.name}</span></h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Box 1: Maps Overview Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Maps Overview
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-sm">
                  <th className="py-3 px-4 font-medium">Map</th>
                  <th className="py-3 px-4 font-medium">Win Rate</th>
                  <th className="py-3 px-4 font-medium">Matches</th>
                </tr>
              </thead>
              <tbody>
                {team.analytics.mapsOverview.map((map, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-slate-200">{map.mapName}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className={map.winRate >= 70 ? 'text-emerald-400' : map.winRate >= 60 ? 'text-cyan-400' : 'text-rose-400'}>
                          {map.winRate}%
                        </span>
                        <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
                          <div 
                            className={`h-full ${map.winRate >= 70 ? 'bg-emerald-400' : map.winRate >= 60 ? 'bg-cyan-400' : 'bg-rose-400'}`}
                            style={{ width: `${map.winRate}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-400">{map.matchesPlayed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Box 2: Strongest Maps Radar Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span> Map Mastery
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={team.analytics.strongestMaps}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="mapName" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Score" dataKey="score" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.4} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }} itemStyle={{ color: '#06b6d4' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Box 3: Rotation Tactics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg relative overflow-hidden"
        >
          <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2 relative z-10">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span> Tactical Blueprint
          </h3>
          <div className="h-64 w-full bg-slate-900/50 rounded-xl border border-white/5 relative flex items-center justify-center overflow-hidden">
            {/* Tactical Grid Background Pattern */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            
            {/* Fake tactical nodes */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" />
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
            <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-rose-400 rounded-full shadow-[0_0_10px_#fb7185]" />
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
              <path d="M 25% 25% Q 50% 10% 66% 33% T 50% 66%" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
            
            <p className="text-slate-400 font-mono text-sm relative z-10 bg-slate-900/80 px-4 py-2 rounded-md border border-slate-700">
              Generating Heatmap...
            </p>
          </div>
        </motion.div>

        {/* Box 4: Weapon/Hero Speciality */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400"></span> Signature Arsenal
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weaponStats} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" />
                <YAxis dataKey="weapon" type="category" stroke="#94a3b8" width={80} tick={{fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="efficiency" fill="#8b5cf6" radius={[0, 4, 4, 0]} name="Efficiency %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
