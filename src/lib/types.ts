export type GameGenre = "Tactical FPS" | "Battle Royale" | "MOBA / Strategy";

export interface TacticalData {
  winProbability: number;
  pointLeakAlerts: string[];
  mapPerformance: {
    mapName: string;
    winRate: number;
    score: number; // 0-100 index
  }[];
  landingZones?: { x: number; y: number }[];
  rotationPaths?: { x: number; y: number }[];
  chokePoints?: { x: number; y: number }[];
}

export interface Player {
  id: string;
  name: string;
  role: "IGL" | "Entry" | "Sniper" | "Duelist" | "Flex" | "AWPer" | "Support" | "Fragger";
  microStats: {
    primaryWeaponProficiency: number; // 0-100
    primaryWeaponName: string;
    secondaryProficiency: number; // 0-100
    utilityImpact: number; // 0-100
  };
  photoUrl?: string;
}

export interface Team {
  id: string;
  name: string;
  genre: GameGenre;
  tacticalData: TacticalData;
  roster: Player[];
}
