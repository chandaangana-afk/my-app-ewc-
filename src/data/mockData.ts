import { Game } from './types';

export const mockData: Game[] = [
  {
    id: 'g1',
    slug: 'counter-strike-2',
    title: 'Counter-Strike 2',
    teams: [
      {
        id: 't1_1',
        slug: 'team-vitality',
        name: 'Team Vitality',
        roster: [
          { id: 'p1_1_0', ign: 'tea_0', role: 'IGL', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_1_1', ign: 'tea_1', role: 'Sniper', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_1_2', ign: 'tea_2', role: 'Entry Fragger', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_1_3', ign: 'tea_3', role: 'Lurker', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_1_4', ign: 'tea_4', role: 'Support', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Mirage', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Inferno', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Nuke', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Anubis', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Mirage', score: 88 },
            { mapName: 'Inferno', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't1_2',
        slug: 'team-spirit',
        name: 'Team Spirit',
        roster: [
          { id: 'p1_2_0', ign: 'tea_0', role: 'IGL', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_2_1', ign: 'tea_1', role: 'Sniper', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_2_2', ign: 'tea_2', role: 'Entry Fragger', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_2_3', ign: 'tea_3', role: 'Lurker', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_2_4', ign: 'tea_4', role: 'Support', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Mirage', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Inferno', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Nuke', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Anubis', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Mirage', score: 88 },
            { mapName: 'Inferno', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't1_3',
        slug: 'team-falcons',
        name: 'Team Falcons',
        roster: [
          { id: 'p1_3_0', ign: 'tea_0', role: 'IGL', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_3_1', ign: 'tea_1', role: 'Sniper', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_3_2', ign: 'tea_2', role: 'Entry Fragger', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_3_3', ign: 'tea_3', role: 'Lurker', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_3_4', ign: 'tea_4', role: 'Support', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Mirage', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Inferno', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Nuke', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Anubis', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Mirage', score: 88 },
            { mapName: 'Inferno', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't1_4',
        slug: 'navi',
        name: 'Navi',
        roster: [
          { id: 'p1_4_0', ign: 'nav_0', role: 'IGL', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_4_1', ign: 'nav_1', role: 'Sniper', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_4_2', ign: 'nav_2', role: 'Entry Fragger', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_4_3', ign: 'nav_3', role: 'Lurker', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
          { id: 'p1_4_4', ign: 'nav_4', role: 'Support', topWeapons: [{ name: 'AK-47', efficiency: 90 }, { name: 'M4A1-S', efficiency: 85 }, { name: 'AWP', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Mirage', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Inferno', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Nuke', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Anubis', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Mirage', score: 88 },
            { mapName: 'Inferno', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
    ]
  },
  {
    id: 'g2',
    slug: 'dota-2',
    title: 'Dota 2',
    teams: [
      {
        id: 't2_1',
        slug: 'team-spirit',
        name: 'Team Spirit',
        roster: [
          { id: 'p2_1_0', ign: 'tea_0', role: 'Pos 1 (Carry)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_1_1', ign: 'tea_1', role: 'Pos 2 (Mid)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_1_2', ign: 'tea_2', role: 'Pos 3 (Offlane)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_1_3', ign: 'tea_3', role: 'Pos 4 (Soft Support)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_1_4', ign: 'tea_4', role: 'Pos 5 (Hard Support)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Radiant', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Dire', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Radiant', score: 88 },
            { mapName: 'Dire', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't2_2',
        slug: 'team-falcons',
        name: 'Team Falcons',
        roster: [
          { id: 'p2_2_0', ign: 'tea_0', role: 'Pos 1 (Carry)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_2_1', ign: 'tea_1', role: 'Pos 2 (Mid)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_2_2', ign: 'tea_2', role: 'Pos 3 (Offlane)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_2_3', ign: 'tea_3', role: 'Pos 4 (Soft Support)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_2_4', ign: 'tea_4', role: 'Pos 5 (Hard Support)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Radiant', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Dire', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Radiant', score: 88 },
            { mapName: 'Dire', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't2_3',
        slug: 'team-liquid',
        name: 'Team Liquid',
        roster: [
          { id: 'p2_3_0', ign: 'tea_0', role: 'Pos 1 (Carry)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_3_1', ign: 'tea_1', role: 'Pos 2 (Mid)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_3_2', ign: 'tea_2', role: 'Pos 3 (Offlane)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_3_3', ign: 'tea_3', role: 'Pos 4 (Soft Support)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_3_4', ign: 'tea_4', role: 'Pos 5 (Hard Support)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Radiant', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Dire', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Radiant', score: 88 },
            { mapName: 'Dire', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't2_4',
        slug: 'aurora-gaming',
        name: 'Aurora Gaming',
        roster: [
          { id: 'p2_4_0', ign: 'aur_0', role: 'Pos 1 (Carry)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_4_1', ign: 'aur_1', role: 'Pos 2 (Mid)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_4_2', ign: 'aur_2', role: 'Pos 3 (Offlane)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_4_3', ign: 'aur_3', role: 'Pos 4 (Soft Support)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
          { id: 'p2_4_4', ign: 'aur_4', role: 'Pos 5 (Hard Support)', topWeapons: [{ name: 'Blink Dagger', efficiency: 90 }, { name: 'BKB', efficiency: 85 }, { name: "Aghanim's Scepter", efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Radiant', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Dire', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Radiant', score: 88 },
            { mapName: 'Dire', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
    ]
  },
  {
    id: 'g3',
    slug: 'free-fire',
    title: 'Free Fire',
    teams: [
      {
        id: 't3_1',
        slug: 'all-gamers-global',
        name: 'All Gamers Global',
        roster: [
          { id: 'p3_1_0', ign: 'all_0', role: 'Captain', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_1_1', ign: 'all_1', role: 'Sniper', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_1_2', ign: 'all_2', role: 'Rusher', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_1_3', ign: 'all_3', role: 'Assaulter', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_1_4', ign: 'all_4', role: 'Support', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Bermuda', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Purgatory', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Kalahari', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Alpine', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Bermuda', score: 88 },
            { mapName: 'Purgatory', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't3_2',
        slug: 'total-gaming-esports',
        name: 'Total Gaming Esports',
        roster: [
          { id: 'p3_2_0', ign: 'tot_0', role: 'Captain', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_2_1', ign: 'tot_1', role: 'Sniper', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_2_2', ign: 'tot_2', role: 'Rusher', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_2_3', ign: 'tot_3', role: 'Assaulter', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_2_4', ign: 'tot_4', role: 'Support', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Bermuda', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Purgatory', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Kalahari', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Alpine', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Bermuda', score: 88 },
            { mapName: 'Purgatory', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't3_3',
        slug: 'apex-gaming',
        name: 'Apex Gaming',
        roster: [
          { id: 'p3_3_0', ign: 'ape_0', role: 'Captain', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_3_1', ign: 'ape_1', role: 'Sniper', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_3_2', ign: 'ape_2', role: 'Rusher', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_3_3', ign: 'ape_3', role: 'Assaulter', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_3_4', ign: 'ape_4', role: 'Support', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Bermuda', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Purgatory', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Kalahari', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Alpine', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Bermuda', score: 88 },
            { mapName: 'Purgatory', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't3_4',
        slug: 's8ul-esports',
        name: 'S8UL Esports',
        roster: [
          { id: 'p3_4_0', ign: 's8u_0', role: 'Captain', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_4_1', ign: 's8u_1', role: 'Sniper', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_4_2', ign: 's8u_2', role: 'Rusher', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_4_3', ign: 's8u_3', role: 'Assaulter', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
          { id: 'p3_4_4', ign: 's8u_4', role: 'Support', topWeapons: [{ name: 'MP40', efficiency: 90 }, { name: 'AWM', efficiency: 85 }, { name: 'M1887', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Bermuda', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Purgatory', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Kalahari', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Alpine', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Bermuda', score: 88 },
            { mapName: 'Purgatory', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
    ]
  },
  {
    id: 'g4',
    slug: 'valorant',
    title: 'VALORANT',
    teams: [
      {
        id: 't4_1',
        slug: 'rrq',
        name: 'RRQ',
        roster: [
          { id: 'p4_1_0', ign: 'rrq_0', role: 'Duelist', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_1_1', ign: 'rrq_1', role: 'Initiator', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_1_2', ign: 'rrq_2', role: 'Controller', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_1_3', ign: 'rrq_3', role: 'Sentinel', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_1_4', ign: 'rrq_4', role: 'Flex', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Ascent', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Bind', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Haven', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Split', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Ascent', score: 88 },
            { mapName: 'Bind', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't4_2',
        slug: 'team-liquid',
        name: 'Team Liquid',
        roster: [
          { id: 'p4_2_0', ign: 'tea_0', role: 'Duelist', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_2_1', ign: 'tea_1', role: 'Initiator', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_2_2', ign: 'tea_2', role: 'Controller', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_2_3', ign: 'tea_3', role: 'Sentinel', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_2_4', ign: 'tea_4', role: 'Flex', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Ascent', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Bind', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Haven', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Split', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Ascent', score: 88 },
            { mapName: 'Bind', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't4_3',
        slug: 'senitels',
        name: 'Senitels',
        roster: [
          { id: 'p4_3_0', ign: 'sen_0', role: 'Duelist', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_3_1', ign: 'sen_1', role: 'Initiator', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_3_2', ign: 'sen_2', role: 'Controller', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_3_3', ign: 'sen_3', role: 'Sentinel', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_3_4', ign: 'sen_4', role: 'Flex', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Ascent', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Bind', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Haven', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Split', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Ascent', score: 88 },
            { mapName: 'Bind', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't4_4',
        slug: 'fnatic',
        name: 'Fnatic',
        roster: [
          { id: 'p4_4_0', ign: 'fna_0', role: 'Duelist', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_4_1', ign: 'fna_1', role: 'Initiator', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_4_2', ign: 'fna_2', role: 'Controller', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_4_3', ign: 'fna_3', role: 'Sentinel', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
          { id: 'p4_4_4', ign: 'fna_4', role: 'Flex', topWeapons: [{ name: 'Vandal', efficiency: 90 }, { name: 'Phantom', efficiency: 85 }, { name: 'Operator', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Ascent', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Bind', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Haven', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Split', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Ascent', score: 88 },
            { mapName: 'Bind', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
    ]
  },
  {
    id: 'g5',
    slug: 'pubg-mobile',
    title: 'PUBG Mobile',
    teams: [
      {
        id: 't5_1',
        slug: 'drx',
        name: 'DRX',
        roster: [
          { id: 'p5_1_0', ign: 'drx_0', role: 'IGL', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_1_1', ign: 'drx_1', role: 'Assaulter', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_1_2', ign: 'drx_2', role: 'Assaulter', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_1_3', ign: 'drx_3', role: 'Support', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_1_4', ign: 'drx_4', role: 'Sniper', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Erangel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Miramar', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Sanhok', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Vikendi', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Erangel', score: 88 },
            { mapName: 'Miramar', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't5_2',
        slug: 'team-falcons',
        name: 'Team Falcons',
        roster: [
          { id: 'p5_2_0', ign: 'tea_0', role: 'IGL', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_2_1', ign: 'tea_1', role: 'Assaulter', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_2_2', ign: 'tea_2', role: 'Assaulter', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_2_3', ign: 'tea_3', role: 'Support', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_2_4', ign: 'tea_4', role: 'Sniper', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Erangel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Miramar', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Sanhok', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Vikendi', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Erangel', score: 88 },
            { mapName: 'Miramar', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't5_3',
        slug: 'alpha-7-esports',
        name: 'Alpha 7 Esports',
        roster: [
          { id: 'p5_3_0', ign: 'alp_0', role: 'IGL', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_3_1', ign: 'alp_1', role: 'Assaulter', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_3_2', ign: 'alp_2', role: 'Assaulter', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_3_3', ign: 'alp_3', role: 'Support', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_3_4', ign: 'alp_4', role: 'Sniper', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Erangel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Miramar', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Sanhok', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Vikendi', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Erangel', score: 88 },
            { mapName: 'Miramar', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't5_4',
        slug: 'nigma-galaxy',
        name: 'Nigma Galaxy',
        roster: [
          { id: 'p5_4_0', ign: 'nig_0', role: 'IGL', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_4_1', ign: 'nig_1', role: 'Assaulter', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_4_2', ign: 'nig_2', role: 'Assaulter', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_4_3', ign: 'nig_3', role: 'Support', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
          { id: 'p5_4_4', ign: 'nig_4', role: 'Sniper', topWeapons: [{ name: 'M416', efficiency: 90 }, { name: 'AKM', efficiency: 85 }, { name: 'Kar98k', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Erangel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Miramar', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Sanhok', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Vikendi', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Erangel', score: 88 },
            { mapName: 'Miramar', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
    ]
  },
  {
    id: 'g6',
    slug: 'pubg-pc',
    title: 'PUBG PC',
    teams: [
      {
        id: 't6_1',
        slug: 'twisted-minds',
        name: 'Twisted Minds',
        roster: [
          { id: 'p6_1_0', ign: 'twi_0', role: 'IGL', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_1_1', ign: 'twi_1', role: 'Fragger', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_1_2', ign: 'twi_2', role: 'Support', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_1_3', ign: 'twi_3', role: 'Sniper', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_1_4', ign: 'twi_4', role: 'Flex', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Erangel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Miramar', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Taego', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Deston', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Erangel', score: 88 },
            { mapName: 'Miramar', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't6_2',
        slug: 'team-falcons',
        name: 'Team Falcons',
        roster: [
          { id: 'p6_2_0', ign: 'tea_0', role: 'IGL', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_2_1', ign: 'tea_1', role: 'Fragger', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_2_2', ign: 'tea_2', role: 'Support', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_2_3', ign: 'tea_3', role: 'Sniper', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_2_4', ign: 'tea_4', role: 'Flex', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Erangel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Miramar', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Taego', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Deston', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Erangel', score: 88 },
            { mapName: 'Miramar', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't6_3',
        slug: 'navi',
        name: 'NAVI',
        roster: [
          { id: 'p6_3_0', ign: 'nav_0', role: 'IGL', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_3_1', ign: 'nav_1', role: 'Fragger', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_3_2', ign: 'nav_2', role: 'Support', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_3_3', ign: 'nav_3', role: 'Sniper', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_3_4', ign: 'nav_4', role: 'Flex', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Erangel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Miramar', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Taego', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Deston', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Erangel', score: 88 },
            { mapName: 'Miramar', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't6_4',
        slug: '17-gaming',
        name: '17 Gaming',
        roster: [
          { id: 'p6_4_0', ign: '17-_0', role: 'IGL', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_4_1', ign: '17-_1', role: 'Fragger', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_4_2', ign: '17-_2', role: 'Support', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_4_3', ign: '17-_3', role: 'Sniper', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
          { id: 'p6_4_4', ign: '17-_4', role: 'Flex', topWeapons: [{ name: 'Beryl M762', efficiency: 90 }, { name: 'M416', efficiency: 85 }, { name: 'Mini14', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Erangel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Miramar', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Taego', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Deston', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Erangel', score: 88 },
            { mapName: 'Miramar', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
    ]
  },
  {
    id: 'g7',
    slug: 'call-of-duty',
    title: 'Call Of Duty',
    teams: [
      {
        id: 't7_1',
        slug: 'team-falcons',
        name: 'Team Falcons',
        roster: [
          { id: 'p7_1_0', ign: 'tea_0', role: 'AR Slayer', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_1_1', ign: 'tea_1', role: 'SMG Slayer', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_1_2', ign: 'tea_2', role: 'Flex', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_1_3', ign: 'tea_3', role: 'Anchor', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_1_4', ign: 'tea_4', role: 'Objective', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Mercado Las Almas', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Breenbergh Hotel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'El Asilo', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Embassy', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Mercado Las Almas', score: 88 },
            { mapName: 'Breenbergh Hotel', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't7_2',
        slug: 'team-vitality',
        name: 'Team Vitality',
        roster: [
          { id: 'p7_2_0', ign: 'tea_0', role: 'AR Slayer', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_2_1', ign: 'tea_1', role: 'SMG Slayer', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_2_2', ign: 'tea_2', role: 'Flex', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_2_3', ign: 'tea_3', role: 'Anchor', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_2_4', ign: 'tea_4', role: 'Objective', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Mercado Las Almas', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Breenbergh Hotel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'El Asilo', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Embassy', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Mercado Las Almas', score: 88 },
            { mapName: 'Breenbergh Hotel', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't7_3',
        slug: 'gentle-mates',
        name: 'Gentle Mates',
        roster: [
          { id: 'p7_3_0', ign: 'gen_0', role: 'AR Slayer', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_3_1', ign: 'gen_1', role: 'SMG Slayer', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_3_2', ign: 'gen_2', role: 'Flex', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_3_3', ign: 'gen_3', role: 'Anchor', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_3_4', ign: 'gen_4', role: 'Objective', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Mercado Las Almas', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Breenbergh Hotel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'El Asilo', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Embassy', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Mercado Las Almas', score: 88 },
            { mapName: 'Breenbergh Hotel', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
      {
        id: 't7_4',
        slug: 'faze-clan',
        name: 'FaZe Clan',
        roster: [
          { id: 'p7_4_0', ign: 'faz_0', role: 'AR Slayer', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_4_1', ign: 'faz_1', role: 'SMG Slayer', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_4_2', ign: 'faz_2', role: 'Flex', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_4_3', ign: 'faz_3', role: 'Anchor', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
          { id: 'p7_4_4', ign: 'faz_4', role: 'Objective', topWeapons: [{ name: 'TAQ-56', efficiency: 90 }, { name: 'Vaznev-9k', efficiency: 85 }, { name: 'Kastov 762', efficiency: 80 }] },
        ],
        analytics: {
          mapsOverview: [
            { mapName: 'Mercado Las Almas', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Breenbergh Hotel', winRate: 65, matchesPlayed: 20 },
            { mapName: 'El Asilo', winRate: 65, matchesPlayed: 20 },
            { mapName: 'Embassy', winRate: 65, matchesPlayed: 20 },
          ],
          strongestMaps: [
            { mapName: 'Mercado Las Almas', score: 88 },
            { mapName: 'Breenbergh Hotel', score: 75 }
          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },
    ]
  },
];
