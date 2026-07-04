"use client";

import { GameGenre } from "@/lib/types";
import { ChevronDown, Trophy } from "lucide-react";
import { useState } from "react";

interface TopNavProps {
  currentGenre: GameGenre;
  onGenreChange: (genre: GameGenre) => void;
}

const genres: GameGenre[] = ["Tactical FPS", "Battle Royale", "MOBA / Strategy"];

export default function TopNav({ currentGenre, onGenreChange }: TopNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
          <Trophy className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-wide">EWC 2026</h1>
          <p className="text-xs text-zinc-400">Advanced Analytics Platform</p>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-200 hover:bg-zinc-800 transition-colors"
        >
          {currentGenre}
          <ChevronDown className="w-4 h-4 text-zinc-400" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden py-1 z-50">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => {
                  onGenreChange(genre);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  currentGenre === genre
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-zinc-300 hover:bg-zinc-800"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
