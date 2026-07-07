"use client";

import Link from "next/link";
import { Crosshair, Target, Shield, Flame, Monitor, Gamepad2, Skull } from "lucide-react";
import React from "react";

const GAMES = [
  { id: "cs2", name: "CS2", icon: Crosshair, genre: "Tactical FPS", color: "from-orange-500/20 to-transparent", hoverColor: "group-hover:border-orange-500/50", iconColor: "text-orange-400" },
  { id: "valorant", name: "VALORANT", icon: Target, genre: "Tactical FPS", color: "from-red-500/20 to-transparent", hoverColor: "group-hover:border-red-500/50", iconColor: "text-red-400" },
  { id: "dota2", name: "Dota 2", icon: Shield, genre: "MOBA / Strategy", color: "from-red-600/20 to-transparent", hoverColor: "group-hover:border-red-600/50", iconColor: "text-red-500" },
  { id: "pubg-mobile", name: "PUBG Mobile", icon: Gamepad2, genre: "Battle Royale", color: "from-yellow-500/20 to-transparent", hoverColor: "group-hover:border-yellow-500/50", iconColor: "text-yellow-400" },
  { id: "free-fire", name: "Free Fire", icon: Flame, genre: "Battle Royale", color: "from-orange-600/20 to-transparent", hoverColor: "group-hover:border-orange-600/50", iconColor: "text-orange-500" },
  { id: "pubg-pc", name: "PUBG PC", icon: Monitor, genre: "Battle Royale", color: "from-zinc-500/20 to-transparent", hoverColor: "group-hover:border-zinc-500/50", iconColor: "text-zinc-400" },
  { id: "cod", name: "Call of Duty", icon: Skull, genre: "FPS", color: "from-green-500/20 to-transparent", hoverColor: "group-hover:border-green-500/50", iconColor: "text-green-400" },
];

export default function GameCards() {
  return (
    <section id="games" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Supported Titles</h2>
        <p className="text-zinc-400 max-w-xl">
          Deep-dive analytics across 7 major esports titles. Access real-time predictive modeling, tactical mapping, and advanced roster statistics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {GAMES.map((game) => (
          <Link
            key={game.id}
            href={`/dashboard`} // Later can be parameterized if needed: `/dashboard?game=${game.id}`
            className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-900/50 ${game.hoverColor}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${game.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="p-6 relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center mb-6 border border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                {React.createElement(game.icon, { className: `w-6 h-6 ${game.iconColor}` })}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
              <p className="text-sm text-zinc-500 font-medium mb-4">{game.genre}</p>
              
              <div className="mt-auto flex items-center text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors">
                View Analytics
                <svg className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
