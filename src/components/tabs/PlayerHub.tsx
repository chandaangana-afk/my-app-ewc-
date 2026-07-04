import { Player } from "@/lib/types";
import { Crosshair, Shield, Sword, User } from "lucide-react";

interface PlayerHubProps {
  roster: Player[];
}

export default function PlayerHub({ roster }: PlayerHubProps) {
  
  const getRoleIcon = (role: string) => {
    switch (role) {
      case "IGL": return <Shield className="w-4 h-4 text-violet-400" />;
      case "Sniper":
      case "AWPer": return <Crosshair className="w-4 h-4 text-amber-400" />;
      default: return <Sword className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div className="p-6 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <User className="w-5 h-5 text-violet-400" />
        Player Specialty Hub
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {roster.map((player) => (
          <div key={player.id} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors">
            {/* Header */}
            <div className="p-5 border-b border-zinc-800/50 bg-zinc-900/80 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-zinc-100">{player.name}</h3>
                <div className="inline-flex items-center gap-1.5 mt-2 bg-zinc-800/80 px-2 py-1 rounded text-xs font-medium text-zinc-300">
                  {getRoleIcon(player.role)}
                  {player.role}
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <User className="w-6 h-6 text-zinc-500" />
              </div>
            </div>

            {/* Micro-weapon analytics */}
            <div className="p-5 space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-zinc-400">Primary: {player.microStats.primaryWeaponName}</span>
                  <span className="text-emerald-400">{player.microStats.primaryWeaponProficiency}% Eff</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${player.microStats.primaryWeaponProficiency}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-zinc-400">Secondary / Pistols</span>
                  <span className="text-cyan-400">{player.microStats.secondaryProficiency}% Eff</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-500 rounded-full"
                    style={{ width: `${player.microStats.secondaryProficiency}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-zinc-400">Utility Impact</span>
                  <span className="text-violet-400">{player.microStats.utilityImpact}% Impact</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-violet-500 rounded-full"
                    style={{ width: `${player.microStats.utilityImpact}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
