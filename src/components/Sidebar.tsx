import { Team } from "@/lib/types";
import { Users } from "lucide-react";

interface SidebarProps {
  teams: Team[];
  selectedTeamId: string;
  onSelectTeam: (id: string) => void;
}

export default function Sidebar({ teams, selectedTeamId, onSelectTeam }: SidebarProps) {
  return (
    <div className="w-64 flex-shrink-0 bg-zinc-900/50 backdrop-blur-md border-r border-zinc-800 flex flex-col h-full overflow-y-auto hidden md:flex">
      <div className="p-4 border-b border-zinc-800/50">
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
          <Users className="w-4 h-4" />
          Active Rosters
        </h2>
      </div>
      <div className="p-2 flex flex-col gap-1">
        {teams.map((team) => {
          const isActive = team.id === selectedTeamId;
          return (
            <button
              key={team.id}
              onClick={() => onSelectTeam(team.id)}
              className={`text-left px-3 py-3 rounded-lg text-sm transition-all duration-200 border ${
                isActive
                  ? "bg-violet-500/10 border-violet-500/30 text-violet-400 font-medium"
                  : "bg-transparent border-transparent text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
              }`}
            >
              {team.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
