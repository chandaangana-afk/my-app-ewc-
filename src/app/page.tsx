"use client";

import Image from "next/image";
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

const logoUrlBySlug: Record<string, string> = {
  "counter-strike-2": "/cod2.png",
};

export default function LandingPage() {
  const games = mockData.map((game, index) => {
    const accent = getAccentPreset(game.title);

    return {
      ...game,
      accent,
      rank: index + 1,
      logoUrl: logoUrlBySlug[game.slug],
    };
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F6F7F9] text-[#111827]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-8rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[rgba(59,130,246,0.08)] blur-[90px]" />
        <div className="absolute right-[-6rem] top-[-1rem] h-[14rem] w-[14rem] rounded-full bg-[rgba(168,85,247,0.05)] blur-[80px]" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-[14px] border border-slate-200 bg-white shadow-sm">
            <span className="relative text-[0.85rem] font-semibold text-[#111827]">
              EWC
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[0.95rem] font-semibold text-[#111827]">
              EWC
            </span>
            <span className="text-[0.75rem] text-[#6B7280]">
              Analytics
            </span>
          </div>
        </Link>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[0.8rem] font-medium text-[#6B7280] shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22E6D4] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22E6D4]" />
          </span>
          Live data
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-20 pt-4 sm:px-6 lg:px-8 lg:pt-8">
        <section className="rounded-[24px] border border-slate-200 bg-white px-5 py-10 shadow-sm sm:px-8 lg:px-10 lg:py-12">
          <div className="max-w-2xl">
            <p className="mb-3 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Live esports analytics
            </p>
            <h1 className="font-display text-5xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-6xl lg:text-7xl">
              Choose your arena with confidence
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">
              Clean, thoughtful insights for every game — balanced with clarity, softness, and a less mechanical feel.
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
                  className={`game-card relative h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent-line)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] ${game.accent.cardClass}`}
                >
                  <div className="game-card__glow pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-80" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="game-badge relative flex h-14 w-14 items-center justify-center rounded-[18px] border border-slate-200 bg-slate-50 p-1 shadow-sm">
                        {game.logoUrl ? (
                          <div className="game-badge__image-wrapper rounded-[12px] overflow-hidden bg-white p-1">
                            <Image
                              src={game.logoUrl}
                              alt={`${game.title} logo`}
                              width={44}
                              height={44}
                              className="game-badge__image"
                            />
                          </div>
                        ) : (
                          <span className="text-sm font-semibold tracking-[0.08em] text-[#111827]">
                            {game.accent.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-[0.74rem] font-semibold text-[#6B7280]">
                        #{game.rank}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-display text-[1.2rem] font-semibold text-[#111827]">
                        {game.title}
                      </h2>
                      <p className="text-sm text-[#475569]">{game.accent.genre}</p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-8">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280]">
                        <span className="game-card__dot h-2.5 w-2.5 rounded-full" />
                        Live
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#111827] transition-transform duration-300 group-hover:translate-x-1">
                        Open
                        <ArrowRight className="h-4 w-4 text-[#111827]" />
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
