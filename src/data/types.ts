export interface WeaponStat {
  name: string;
  efficiency: number; // percentage
}

export interface Player {
  id: string;
  ign: string;
  role: string;
  avatarUrl?: string;
  topWeapons: WeaponStat[];
}

export interface MapStat {
  mapName: string;
  winRate: number; // percentage
  matchesPlayed: number;
}

export interface TeamAnalytics {
  mapsOverview: MapStat[];
  strongestMaps: { mapName: string; score: number }[];
  rotationTactics: string;
  detailedOverview: string;
}

export interface Team {
  id: string;
  slug: string;
  name: string;
  logoUrl?: string;
  roster: Player[];
  analytics: TeamAnalytics;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  teams: Team[];
}
