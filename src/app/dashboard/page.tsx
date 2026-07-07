"use client";

import { useMemo, useState } from "react";
import { GameGenre } from "@/lib/types";
import { MOCK_TEAMS } from "@/lib/mockData";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import PredictiveMatrix from "@/components/tabs/PredictiveMatrix";
import TacticalMap from "@/components/tabs/TacticalMap";
import PlayerHub from "@/components/tabs/PlayerHub";
import { Activity, Map as MapIcon, Users } from "lucide-react";

type Tab = "matrix" | "map" | "players";

export default function Dashboard() {
  const [genre, setGenre] = useState<GameGenre>("Tactical FPS");
  const [activeTab, setActiveTab] = useState<Tab>("matrix");
  
  // Filter teams by genre
  const availableTeams = useMemo(() => MOCK_TEAMS.filter((t) => t.genre === genre), [genre]);
  
  // Keep selected team in sync if genre changes
  const [selectedTeamId, setSelectedTeamId] = useState<string>(availableTeams[0]?.id || "");

  // If the selected team is not in available teams, default to the first one
  const actualSelectedTeamId = availableTeams.find(t => t.id === selectedTeamId) ? selectedTeamId : (availableTeams[0]?.id || "");
  const activeTeam = availableTeams.find((t) => t.id === actualSelectedTeamId);

  return (
    <div className="h-screen w-full flex flex-col bg-zinc-950 overflow-hidden text-slate-200">
      <TopNav currentGenre={genre} onGenreChange={setGenre} />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          teams={availableTeams} 
          selectedTeamId={actualSelectedTeamId} 
          onSelectTeam={setSelectedTeamId} 
        />

        <main className="flex-1 flex flex-col min-w-0 bg-zinc-950/50">
          {/* Tab Navigation */}
          <div className="flex px-6 pt-6 border-b border-zinc-800">
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab("matrix")}
                className={`pb-4 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${
                  activeTab === "matrix" 
                    ? "border-emerald-500 text-emerald-400" 
                    : "border-transparent text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Activity className="w-4 h-4" />
                Predictive Matrix
              </button>
              <button
                onClick={() => setActiveTab("map")}
                className={`pb-4 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${
                  activeTab === "map" 
                    ? "border-cyan-500 text-cyan-400" 
                    : "border-transparent text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <MapIcon className="w-4 h-4" />
                Tactical Map
              </button>
              <button
                onClick={() => setActiveTab("players")}
                className={`pb-4 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${
                  activeTab === "players" 
                    ? "border-violet-500 text-violet-400" 
                    : "border-transparent text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Users className="w-4 h-4" />
                Player Hub
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-hidden">
            {activeTeam ? (
              <>
                {activeTab === "matrix" && <PredictiveMatrix data={activeTeam.tacticalData} />}
                {activeTab === "map" && <TacticalMap data={activeTeam.tacticalData} />}
                {activeTab === "players" && <PlayerHub roster={activeTeam.roster} />}
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-zinc-500">
                No data available for this genre.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
