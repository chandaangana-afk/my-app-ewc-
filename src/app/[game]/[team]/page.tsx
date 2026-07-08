"use client";

import { useMemo, useState, use } from 'react';
import { notFound } from 'next/navigation';
import { mockData } from '@/data/mockData';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function TeamDashboard({ params }: { params: Promise<{ game: string, team: string }> }) {
  const { game: gameSlug, team: teamSlug } = use(params);
  const [showOverview, setShowOverview] = useState(false);

  const data = useMemo(() => {
    const game = mockData.find(g => g.slug === gameSlug);
    if (!game) return null;
    const team = game.teams.find(t => t.slug === teamSlug);
    if (!team) return null;
    return { game, team };
  }, [gameSlug, teamSlug]);

  if (!data) {
    notFound();
  }

  const { game, team } = data;
  const isCod = game.slug === 'call-of-duty';
  const isFf = game.slug === 'free-fire';
  const isValo = game.slug === 'valorant';
  const isDota = game.slug === 'dota-2';
  const isPubgM = game.slug === 'pubg-mobile';
  const isPubgPc = game.slug === 'pubg-pc';
  const hasDarkBg = isCod || isFf || isValo || isDota || isPubgM || isPubgPc;
  const bgClass = isCod ? 'game-page__bg--call-of-duty' : isFf ? 'game-page__bg--free-fire' : isValo ? 'game-page__bg--valorant' : isDota ? 'game-page__bg--dota-2' : isPubgM ? 'game-page__bg--pubg-mobile' : isPubgPc ? 'game-page__bg--pubg-pc' : '';

  return (
    <div 
      className={`min-h-screen text-white font-sans overflow-x-hidden selection:bg-teal-500/30 bg-slate-950`}
    >
      {hasDarkBg && (
        <div 
          className={`fixed inset-0 z-[-1] game-page__bg bg-cover bg-center bg-no-repeat ${bgClass}`} 
        />
      )}
      {/* Top Navbar */}
      <nav className="w-full bg-black/50 backdrop-blur-md border-b border-white/5 flex justify-between items-center sticky top-0 z-50 shadow-sm h-20 px-8">
        <Link href={`/${game.slug}`} className="text-teal-400 hover:text-teal-300 font-['Orbitron',_sans-serif] uppercase tracking-wider flex items-center gap-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Teams
        </Link>
        <h1 className="font-['Orbitron',_sans-serif] uppercase tracking-[0.2em] text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 drop-shadow-sm">
          {team.name}
        </h1>
        <div className="w-32 flex justify-end">
          <button 
            onClick={() => setShowOverview(true)}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-sm font-semibold tracking-wider transition-all"
          >
            OVERVIEW
          </button>
        </div>
      </nav>

      <main className="w-full max-w-7xl mx-auto px-4 py-12 space-y-12">
        
        {/* Roster Section */}
        <section>
          <h2 className="font-['Orbitron',_sans-serif] text-2xl font-bold tracking-widest text-teal-400 mb-6 uppercase border-b border-white/10 pb-4">
            Active Roster
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.roster.map((player, idx) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal-500/50 transition-colors group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 rounded-full mb-4 mx-auto flex items-center justify-center border border-teal-500/30 group-hover:border-teal-400 transition-colors">
                  <span className="text-xl font-bold text-teal-300">{player.ign.charAt(0)}</span>
                </div>
                <h3 className="text-center font-bold text-lg text-white mb-1">{player.ign}</h3>
                <p className="text-center text-slate-400 text-sm mb-4">{player.role}</p>
                
                <div className="space-y-2 mt-4 border-t border-white/5 pt-4">
                  <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-2">Top Weapons</p>
                  {player.topWeapons.map(w => (
                    <div key={w.name} className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">{w.name}</span>
                      <span className="text-teal-400 font-mono">{w.efficiency}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Maps Overview Chart */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
             <h2 className="font-['Orbitron',_sans-serif] text-xl font-bold tracking-widest text-teal-400 mb-8 uppercase">
              Maps Overview
            </h2>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={team.analytics.mapsOverview}>
                  <XAxis dataKey="mapName" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(20,184,166,0.3)', borderRadius: '8px' }}
                    itemStyle={{ color: '#2dd4bf' }}
                  />
                  <Bar dataKey="winRate" fill="#14b8a6" radius={[4, 4, 0, 0]} maxBarSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Strategy & Tactics */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-['Orbitron',_sans-serif] text-xl font-bold tracking-widest text-teal-400 mb-6 uppercase">
                Rotation Tactics
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {team.analytics.rotationTactics}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-['Orbitron',_sans-serif] text-xl font-bold tracking-widest text-teal-400 mb-6 uppercase border-t border-white/10 pt-6">
                Strongest Maps
              </h2>
                    <div className="space-y-4">
                {team.analytics.strongestMaps.map(m => {
                  const rounded = Math.round(m.score / 10) * 10;
                  const cls = `progress-w-${rounded}`;
                  return (
                    <div key={m.mapName} className="flex items-center gap-4">
                      <div className="w-full progress-bar">
                        <div className={`progress-fill ${cls}`} />
                      </div>
                      <span className="text-white font-medium w-24">{m.mapName}</span>
                      <span className="text-teal-400 font-mono w-12 text-right">{m.score}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Modal Overlay */}
      <AnimatePresence>
        {showOverview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-white/10 rounded-2xl p-8 max-w-2xl w-full relative shadow-2xl"
            >
              <button 
                type="button"
                aria-label="Close overview"
                title="Close overview"
                onClick={() => setShowOverview(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              
              <h2 className="font-['Orbitron',_sans-serif] text-2xl font-bold tracking-widest text-teal-400 mb-6 uppercase">
                Detailed Overview
              </h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {team.analytics.detailedOverview}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
