"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { mockData } from "@/data/mockData";

type AccentPreset = {
  tag: string;
  genre: string;
  cardClass: string;
};

const accentByGame: Record<string, AccentPreset> = {
  "Counter-Strike 2": {
    tag: "CS2",
    genre: "Tactical FPS",
    cardClass: "game-card--cs2",
  },
  VALORANT: {
    tag: "VAL",
    genre: "Tactical FPS",
    cardClass: "game-card--valorant",
  },
  "Dota 2": {
    tag: "D2",
    genre: "MOBA / Strategy",
    cardClass: "game-card--dota",
  },
  "PUBG Mobile": {
    tag: "PM",
    genre: "Battle Royale",
    cardClass: "game-card--pubg-mobile",
  },
  "PUBG PC": {
    tag: "PC",
    genre: "Battle Royale",
    cardClass: "game-card--pubg-pc",
  },
  "Free Fire": {
    tag: "FF",
    genre: "Battle Royale",
    cardClass: "game-card--free-fire",
  },
  "Call Of Duty": {
    tag: "COD",
    genre: "FPS",
    cardClass: "game-card--cod",
  },
};

const getAccentPreset = (title: string): AccentPreset => {
  return accentByGame[title] ?? {
    tag: title.slice(0, 3).toUpperCase(),
    genre: "Esports Analytics",
    cardClass: "game-card--default",
  };
};

export default function LandingPage() {
  const games = mockData.map((game, index) => {
    const accent = getAccentPreset(game.title);

    return {
      ...game,
      accent,
      rank: index + 1,
    };
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080B12] text-[#EAEEF6]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[rgba(34,230,212,0.09)] blur-[125px]" />
        <div className="absolute right-[-6rem] top-[-4rem] h-[18rem] w-[18rem] rounded-full bg-[rgba(168,85,247,0.06)] blur-[110px]" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-gradient-to-br from-[#22E6D4] via-[#2C7CFF] to-[#A855F7] shadow-[0_0_30px_rgba(34,230,212,0.28)]">
            <div className="absolute inset-1 rounded-[10px] border border-white/20" />
            <span className="relative text-[0.8rem] font-semibold uppercase tracking-[0.26em] text-[#061014]">
              EWC
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.26em] text-[#EAEEF6]">
              EWC
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#8B96AB]">
              Analytics
            </span>
          </div>
        </Link>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#8B96AB] backdrop-blur">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22E6D4] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22E6D4]" />
          </span>
          Live data
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-20 pt-4 sm:px-6 lg:px-8 lg:pt-8">
        <section className="rounded-[24px] border border-white/10 bg-[#0D1320]/70 px-5 py-8 backdrop-blur-xl sm:px-8 lg:px-10 lg:py-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-[0.74rem] font-semibold uppercase tracking-[0.38em] text-[#22E6D4]">
              Broadcast-ready analytics
            </p>
            <h1 className="font-display text-4xl font-semibold uppercase tracking-[0.04em] text-[#EAEEF6] sm:text-5xl lg:text-6xl">
              Choose your <span className="text-[#22E6D4]">arena</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#8B96AB] sm:text-lg">
              Monitor form, map trends, and live roster intel across the games your audience cares about most.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link href={`/${game.slug}`} className="group block">
                <article
                  className={`game-card relative h-full overflow-hidden rounded-[14px] border border-white/10 bg-[#121826] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent-line)] hover:bg-[#161E2E] ${game.accent.cardClass}`}
                >
                  <div className="game-card__glow pointer-events-none absolute inset-0 rounded-[14px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="game-badge relative flex h-14 w-14 items-center justify-center rounded-[16px] border border-white/10 text-lg font-semibold uppercase tracking-[0.24em]">
                        {game.accent.tag}
                      </div>
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-[#5A6578]">
                        #{game.rank}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-display text-[1.15rem] font-semibold uppercase tracking-[0.16em] text-[#EAEEF6]">
                        {game.title}
                      </h2>
                      <p className="text-sm text-[#8B96AB]">{game.accent.genre}</p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-8">
                      <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-[#5A6578]">
                        <span className="game-card__dot h-2.5 w-2.5 rounded-full" />
                        Live
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#EAEEF6] transition-transform duration-300 group-hover:translate-x-1">
                        Open
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}
