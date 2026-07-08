"use client";

import { useMemo, use } from 'react';
import { notFound } from 'next/navigation';
import { mockData } from '@/data/mockData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GamePage({ params }: { params: Promise<{ game: string }> }) {
  const { game: gameSlug } = use(params);

  const game = useMemo(() => mockData.find(g => g.slug === gameSlug), [gameSlug]);

  if (!game) {
    notFound();
  }

  const isCod = game.slug === 'call-of-duty';
  const isFf = game.slug === 'free-fire';
  const isValo = game.slug === 'valorant';
  const isDota = game.slug === 'dota-2';
  const isPubgM = game.slug === 'pubg-mobile';
  const isPubgPc = game.slug === 'pubg-pc';
  const hasDarkBg = isCod || isFf || isValo || isDota || isPubgM || isPubgPc;

  return (
    <div 
      className={`min-h-screen font-sans overflow-x-hidden selection:bg-teal-500/30 ${hasDarkBg ? 'text-white' : 'bg-white text-slate-900'}`}
    >
      {hasDarkBg && (
        <div className={`game-page__bg game-page__bg--${game.slug}`} />
      )}
      {/* Top Navbar */}
      <nav className="w-full bg-black flex justify-between items-center sticky top-0 z-50 shadow-sm h-20 px-8">
        <Link href="/" className="text-teal-400 hover:text-teal-300 font-['Orbitron',_sans-serif] uppercase tracking-wider flex items-center gap-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Games
        </Link>
        <h1 className="font-['Orbitron',_sans-serif] uppercase tracking-[0.2em] text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 drop-shadow-sm">
          {game.title} TEAMS
        </h1>
        <div className="w-32"></div> {/* Spacer for flex centering */}
      </nav>

      {/* Hero Section */}
      <main className="w-full pb-20 pt-12">
        <h2 className="font-['Orbitron',_sans-serif] text-slate-400 text-lg mb-8 text-center font-bold tracking-[0.15em] uppercase">
          Select Team
        </h2>

        {/* The Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {game.teams.map((team, index) => (
            <Link href={`/${game.slug}/${team.slug}`} key={team.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white/60 backdrop-blur-xl border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-teal-400 hover:shadow-[0_8px_30px_rgba(20,184,166,0.25)] transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden h-48 shadow-sm">
                  {/* Visual Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Logo or Text */}
                  <div className="z-10 relative flex items-center justify-center w-full h-full transition-transform duration-300 group-hover:scale-110">
                    {team.logoUrl ? (
                      <Image
                        src={team.logoUrl}
                        alt={team.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <span className="font-['Orbitron',_sans-serif] text-xl font-bold tracking-widest text-slate-700 uppercase group-hover:text-teal-500 transition-colors duration-300 text-center">
                        {team.name}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
