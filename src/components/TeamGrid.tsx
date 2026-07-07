import { Game } from '../data/types';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface TeamGridProps {
  game: Game;
  onSelectTeam: (teamId: string) => void;
}

export function TeamGrid({ game, onSelectTeam }: TeamGridProps) {
  return (
    <div className="p-8 w-full max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
        {game.title} <span className="text-emerald-400">Teams</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {game.teams.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => onSelectTeam(team.id)}
              className="w-full h-48 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-cyan-400">
                {team.logoUrl ? (
                  <img src={team.logoUrl} alt={team.name} className="w-10 h-10 object-contain" />
                ) : (
                  <Shield className="w-8 h-8 text-slate-400 group-hover:text-cyan-400" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-slate-200 group-hover:text-white">{team.name}</h3>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
