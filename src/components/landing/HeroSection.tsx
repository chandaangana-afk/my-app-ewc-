"use client";

import Link from "next/link";
import { ArrowRight, BarChart2, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center text-center">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 mb-8 z-10">
        <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
        <span>EWC 2026 Predictions Now Live</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-6 max-w-4xl tracking-tight z-10">
        Predict the Unpredictable in Esports
      </h1>
      
      <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl z-10">
        AI-driven performance matrix and tactical predictive analytics for CS2, VALORANT, Dota 2, and more. Master the meta before it happens.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-200 font-bold rounded-lg transition-colors group"
        >
          Explore Analytics
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="#features"
          className="flex items-center gap-2 px-8 py-4 bg-zinc-900 text-zinc-200 border border-zinc-700 hover:bg-zinc-800 font-semibold rounded-lg transition-colors"
        >
          <BarChart2 className="w-5 h-5" />
          View Methodology
        </Link>
      </div>
    </section>
  );
}
