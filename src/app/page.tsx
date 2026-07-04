"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const GAMES = [
  { name: "Counter-Strike 2", logo: null, slug: "counter-strike-2" },
  { name: "VALORANT", logo: "/valo2.webp", slug: "valorant" },
  { name: "Dota 2", logo: "/dota2.webp", scale: "scale-150", slug: "dota-2" },
  { name: "PUBG Mobile", logo: "/pubg-mobile.webp", slug: "pubg-mobile" },
  { name: "Free Fire", logo: "/free-fire-max.png", scale: "scale-250", slug: "free-fire" },
  { name: "PUBG PC", logo: "/pubg-pc.webp", slug: "pubg-pc" },
  { name: "Call Of Duty", logo: "/cod2.png", scale: "scale-150", slug: "call-of-duty" }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-teal-500/30">

      {/* Top Navbar */}
      <nav className="w-full bg-black flex justify-center sticky top-0 z-50 shadow-sm h-28 md:h-36">
        <div className="relative w-full max-w-7xl h-full py-4">
          <Image 
            src="/ewc.png"
            alt="EWC 2026 Analytics"
            fill
            className="object-contain"
            priority
          />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="w-full pb-20">
        <h2 className="font-['Orbitron',_sans-serif] text-slate-400 text-lg mt-12 mb-8 text-center font-bold tracking-[0.15em] uppercase">
          Select Game
        </h2>

        {/* The Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {GAMES.map((game, index) => (
            <Link href={`/${game.slug}`} key={game.name}>
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
                    {game.logo ? (
                      <Image
                        src={game.logo}
                        alt={game.name}
                        fill
                        className={`object-contain transition-transform duration-300 ${game.scale || ''}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <span className="font-['Orbitron',_sans-serif] text-xl font-bold tracking-widest text-slate-700 uppercase group-hover:text-teal-500 transition-colors duration-300">
                        {game.name}
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
