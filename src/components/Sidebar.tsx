import { Game } from '../data/types';
import { Trophy, ChevronRight } from 'lucide-react';

interface SidebarProps {
  games: Game[];
  selectedGameId: string | null;
  onSelectGame: (id: string) => void;
}

export function Sidebar({ games, selectedGameId, onSelectGame }: SidebarProps) {
  return (
    <div className="w-64 border-r border-white/10 bg-slate-950/50 backdrop-blur-md p-4 flex flex-col h-full shrink-0">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Trophy className="text-emerald-400 w-6 h-6" />
        <h1 className="text-xl font-bold text-white tracking-wider">EWC 2026</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-2">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-2 mb-4">Tournaments</h2>
        {games.map((game) => {
          const isSelected = game.id === selectedGameId;
          return (
            <button
              key={game.id}
              onClick={() => onSelectGame(game.id)}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-lg transition-all duration-200 group ${
                isSelected 
                  ? 'bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                  : 'text-slate-300 hover:bg-white/5 border border-transparent'
              }`}
            >
              <span className="font-medium text-sm">{game.title}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-500 group-hover:text-slate-300'}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
