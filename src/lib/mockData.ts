import { Team } from "./types";

export const MOCK_TEAMS: Team[] = [
  // Tactical FPS (CS2 / VALORANT)
  {
    id: "vitality",
    name: "Team Vitality",
    genre: "Tactical FPS",
    tacticalData: {
      winProbability: 74,
      pointLeakAlerts: [
        "Retake conversion on 4v5 scenarios: 18% success rate",
        "Mid-round hesitation on Inferno: 42% round loss",
        "Pistol round force buys: 35% conversion",
      ],
      mapPerformance: [
        { mapName: "Nuke", winRate: 82, score: 90 },
        { mapName: "Mirage", winRate: 65, score: 70 },
        { mapName: "Inferno", winRate: 50, score: 50 },
        { mapName: "Overpass", winRate: 40, score: 30 },
      ],
      landingZones: [
        { x: 30, y: 40 },
        { x: 60, y: 70 },
      ],
      rotationPaths: [
        { x: 30, y: 40 },
        { x: 50, y: 55 },
        { x: 60, y: 70 },
      ],
      chokePoints: [
        { x: 45, y: 50 },
        { x: 65, y: 35 },
      ],
    },
    roster: [
      {
        id: "zywoo",
        name: "ZywOo",
        role: "AWPer",
        microStats: {
          primaryWeaponName: "AWP",
          primaryWeaponProficiency: 95,
          secondaryProficiency: 82,
          utilityImpact: 78,
        },
      },
      {
        id: "apex",
        name: "apEX",
        role: "IGL",
        microStats: {
          primaryWeaponName: "AK-47 / M4A4",
          primaryWeaponProficiency: 72,
          secondaryProficiency: 65,
          utilityImpact: 90,
        },
      },
      {
        id: "spinx",
        name: "Spinx",
        role: "Entry",
        microStats: {
          primaryWeaponName: "AK-47",
          primaryWeaponProficiency: 88,
          secondaryProficiency: 70,
          utilityImpact: 75,
        },
      },
      {
        id: "flamez",
        name: "flameZ",
        role: "Entry",
        microStats: {
          primaryWeaponName: "AK-47",
          primaryWeaponProficiency: 85,
          secondaryProficiency: 74,
          utilityImpact: 68,
        },
      },
      {
        id: "mezii",
        name: "mezii",
        role: "Flex",
        microStats: {
          primaryWeaponName: "M4A1-S",
          primaryWeaponProficiency: 80,
          secondaryProficiency: 68,
          utilityImpact: 84,
        },
      },
    ],
  },
  {
    id: "sentinels",
    name: "Sentinels",
    genre: "Tactical FPS",
    tacticalData: {
      winProbability: 68,
      pointLeakAlerts: [
        "Eco round discipline: 20% success rate against full buys",
        "B-site anchor weakness on Lotus: 55% failure rate",
      ],
      mapPerformance: [
        { mapName: "Bind", winRate: 75, score: 85 },
        { mapName: "Ascent", winRate: 60, score: 65 },
        { mapName: "Lotus", winRate: 45, score: 40 },
      ],
      landingZones: [
        { x: 20, y: 80 },
        { x: 75, y: 25 },
      ],
      rotationPaths: [
        { x: 20, y: 80 },
        { x: 45, y: 50 },
        { x: 75, y: 25 },
      ],
      chokePoints: [{ x: 50, y: 50 }],
    },
    roster: [
      {
        id: "tenz",
        name: "TenZ",
        role: "Duelist",
        microStats: {
          primaryWeaponName: "Vandal / Operator",
          primaryWeaponProficiency: 89,
          secondaryProficiency: 78,
          utilityImpact: 65,
        },
      },
      {
        id: "zekken",
        name: "Zekken",
        role: "Flex",
        microStats: {
          primaryWeaponName: "Phantom",
          primaryWeaponProficiency: 84,
          secondaryProficiency: 75,
          utilityImpact: 80,
        },
      },
      {
        id: "sacy",
        name: "Sacy",
        role: "Support",
        microStats: {
          primaryWeaponName: "Vandal",
          primaryWeaponProficiency: 80,
          secondaryProficiency: 70,
          utilityImpact: 92,
        },
      },
      {
        id: "johnqt",
        name: "johnqt",
        role: "IGL",
        microStats: {
          primaryWeaponName: "Vandal",
          primaryWeaponProficiency: 76,
          secondaryProficiency: 65,
          utilityImpact: 88,
        },
      },
    ],
  },

  // Battle Royale (PUBG Mobile)
  {
    id: "alpha7",
    name: "Alpha7",
    genre: "Battle Royale",
    tacticalData: {
      winProbability: 82,
      pointLeakAlerts: [
        "Phase 3 edge-gate keeping losses: 62% failure rate",
        "Vehicle compound crashes: 30% success rate when contested",
      ],
      mapPerformance: [
        { mapName: "Erangel", winRate: 78, score: 85 },
        { mapName: "Miramar", winRate: 85, score: 95 },
        { mapName: "Sanhok", winRate: 50, score: 55 },
      ],
      landingZones: [
        { x: 15, y: 15 },
        { x: 80, y: 80 },
      ],
      rotationPaths: [
        { x: 15, y: 15 },
        { x: 40, y: 30 },
        { x: 55, y: 60 },
        { x: 80, y: 80 },
      ],
      chokePoints: [
        { x: 45, y: 45 },
        { x: 60, y: 35 },
      ],
    },
    roster: [
      {
        id: "revo",
        name: "Revo",
        role: "Fragger",
        microStats: {
          primaryWeaponName: "M416",
          primaryWeaponProficiency: 91,
          secondaryProficiency: 85,
          utilityImpact: 72,
        },
      },
      {
        id: "mafia",
        name: "Mafia",
        role: "IGL",
        microStats: {
          primaryWeaponName: "SCAR-L",
          primaryWeaponProficiency: 78,
          secondaryProficiency: 65,
          utilityImpact: 85,
        },
      },
      {
        id: "mythic",
        name: "Mythic",
        role: "Sniper",
        microStats: {
          primaryWeaponName: "Kar98k / AWM",
          primaryWeaponProficiency: 93,
          secondaryProficiency: 70,
          utilityImpact: 60,
        },
      },
      {
        id: "carrilho",
        name: "Carrilho",
        role: "Flex",
        microStats: {
          primaryWeaponName: "M416 / UMP45",
          primaryWeaponProficiency: 84,
          secondaryProficiency: 88,
          utilityImpact: 80,
        },
      },
    ],
  },

  // MOBA (Dota 2)
  {
    id: "falcons_dota",
    name: "Team Falcons",
    genre: "MOBA / Strategy",
    tacticalData: {
      winProbability: 79,
      pointLeakAlerts: [
        "Roshan pit contests without Aegis: 65% team wipe rate",
        "High ground sieges at 25m mark: 45% stall rate",
      ],
      mapPerformance: [
        { mapName: "Radiant", winRate: 72, score: 80 },
        { mapName: "Dire", winRate: 64, score: 70 },
      ],
      landingZones: [
        { x: 20, y: 80 }, // Safe lane
        { x: 50, y: 50 }, // Mid
        { x: 80, y: 20 }, // Offlane
      ],
      rotationPaths: [
        { x: 20, y: 80 },
        { x: 50, y: 50 },
        { x: 60, y: 40 }, // River / Rosh
      ],
      chokePoints: [
        { x: 65, y: 45 },
        { x: 35, y: 55 },
      ],
    },
    roster: [
      {
        id: "skiter",
        name: "skiter",
        role: "Entry", // Carry in MOBA context
        microStats: {
          primaryWeaponName: "Sven / Lifestealer",
          primaryWeaponProficiency: 88,
          secondaryProficiency: 80,
          utilityImpact: 60,
        },
      },
      {
        id: "malr1ne",
        name: "Malr1ne",
        role: "Duelist", // Mid
        microStats: {
          primaryWeaponName: "Pangolier / Leshrac",
          primaryWeaponProficiency: 92,
          secondaryProficiency: 85,
          utilityImpact: 75,
        },
      },
      {
        id: "ammar",
        name: "ATF",
        role: "Flex", // Offlane
        microStats: {
          primaryWeaponName: "Timbersaw / Mars",
          primaryWeaponProficiency: 95,
          secondaryProficiency: 82,
          utilityImpact: 88,
        },
      },
      {
        id: "cr1t",
        name: "Cr1t-",
        role: "Support",
        microStats: {
          primaryWeaponName: "Tusk / Dark Willow",
          primaryWeaponProficiency: 86,
          secondaryProficiency: 78,
          utilityImpact: 94,
        },
      },
      {
        id: "sneyking",
        name: "Sneyking",
        role: "IGL", // Hard Support
        microStats: {
          primaryWeaponName: "Crystal Maiden / Mirana",
          primaryWeaponProficiency: 80,
          secondaryProficiency: 75,
          utilityImpact: 96,
        },
      },
    ],
  },
];
