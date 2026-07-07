"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/landing/Footer";

const GAMES = [
  { name: "Counter-Strike 2", logo: null, slug: "counter-strike-2" },
  { name: "VALORANT", logo: "/valo2.webp", slug: "valorant" },
  { name: "Dota 2", logo: "/dota2.webp", scale: "scale-150", slug: "dota-2" },
  { name: "PUBG Mobile", logo: "/pubg-mobile.webp", slug: "pubg-mobile" },
  { name: "Free Fire", logo: "/free-fire-max.png", scale: "scale-125", slug: "free-fire" },
  { name: "PUBG PC", logo: "/pubg-pc.webp", slug: "pubg-pc" },
  { name: "Call Of Duty", logo: "/cod2.png", scale: "scale-150", slug: "call-of-duty" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100 font-sans overflow-x-hidden">

      {/* Top Navbar */}
      <nav className="w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex justify-center sticky top-0 z-50 h-28 md:h-36">
        <div className="relative w-full max-w-7xl h-full py-4 px-4">
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
        <div className="relative text-center pt-16 pb-10 px-4">
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="relative text-slate-400 text-sm mt-2 mb-8 text-center font-bold tracking-[0.2em] uppercase">
            Select Game
          </h2>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {GAMES.map((game, index) => (
            <Link href={`/${game.slug}`} key={game.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 cursor-pointer h-48 shadow-lg hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] transition-shadow duration-300"
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Logo or Text */}
                <div className="relative z-10 flex items-center justify-center w-full h-full p-6">
                  {game.logo ? (
                    <Image
                      src={game.logo}
                      alt={game.name}
                      fill
                      className={`object-contain p-8 transition-transform duration-300 group-hover:scale-110 ${game.scale ?? ""}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <span className="text-xl font-extrabold tracking-widest text-zinc-200 uppercase group-hover:text-emerald-400 transition-colors duration-300">
                      {game.name}
                    </span>
                  )}
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-400 group-hover:text-emerald-400 transition-colors duration-200 truncate">
                    {game.name}
                  </span>
                  <svg
                    className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
