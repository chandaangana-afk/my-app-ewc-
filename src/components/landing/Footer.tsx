"use client";

import Link from "next/link";
import { Trophy, Github, Twitter, Disc } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Trophy className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">EWC 2026</span>
          </div>
          <p className="text-zinc-500 max-w-sm mb-6">
            Empowering analysts and fans with next-generation predictive modeling, spatial mapping, and micro-statistical tracking across top esports titles.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors">
              <Disc className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Platform</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link href="/dashboard" className="hover:text-emerald-400 transition-colors">Analytics Dashboard</Link></li>
            <li><Link href="#predictions" className="hover:text-emerald-400 transition-colors">Predictive Matrix</Link></li>
            <li><Link href="#map" className="hover:text-emerald-400 transition-colors">Tactical Map</Link></li>
            <li><Link href="#players" className="hover:text-emerald-400 transition-colors">Player Hub</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Data Usage</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>&copy; 2026 EWC Analytics. All rights reserved.</p>
        <p>Not affiliated with Electronic Sports World Cup or game publishers.</p>
      </div>
    </footer>
  );
}
