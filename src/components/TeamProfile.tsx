import { Team } from '../data/types';
import { motion } from 'framer-motion';
import { User, Activity } from 'lucide-react';

interface TeamProfileProps {
  team: Team;
  onGoBack: () => void;
  onViewAnalytics: () => void;
}

export function TeamProfile({ team, onGoBack, onViewAnalytics }: TeamProfileProps) {
  return (
    <div className="p-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-white tracking-tight flex items-center gap-4">
            {team.name}
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">
              Active Roster
            </span>
          </h2>
        </div>
        
        <button
          onClick={onViewAnalytics}
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
        >
          <Activity className="w-5 h-5" />
          Detailed Overview
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {team.roster.map((player, index) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors group"
          >
            <div className="h-32 bg-slate-800/50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              {player.avatarUrl ? (
                <img src={player.avatarUrl} alt={player.ign} className="w-full h-full object-cover opacity-60" />
              ) : (
                <User className="w-16 h-16 text-slate-600" />
              )}
            </div>
            <div className="p-5 text-center -mt-8 relative z-10">
              <div className="w-16 h-16 mx-auto bg-slate-900 border-2 border-cyan-500 rounded-full flex items-center justify-center mb-3 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                {player.avatarUrl ? (
                  <img src={player.avatarUrl} alt={player.ign} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <User className="w-8 h-8 text-cyan-400" />
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{player.ign}</h3>
              <p className="text-sm text-cyan-400 font-medium uppercase tracking-wider">{player.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
