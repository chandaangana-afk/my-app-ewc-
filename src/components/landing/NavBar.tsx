"use client";

import Link from "next/link";
import { Trophy } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
          <Trophy className="w-6 h-6 text-emerald-400" />
        </div>
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-bold text-white tracking-wide">EWC 2026</h1>
          <p className="text-xs text-zinc-400">Advanced Analytics</p>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <Link href="#features" className="hover:text-zinc-200 transition-colors">Features</Link>
        <Link href="#games" className="hover:text-zinc-200 transition-colors">Games</Link>
        <Link href="#predictions" className="hover:text-zinc-200 transition-colors">Predictions</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 text-sm font-semibold rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all"
        >
          Launch Dashboard
        </Link>
      </div>
    </nav>
  );
}
