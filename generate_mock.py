import json

games = {
    "Counter-Strike 2": ["Team Vitality", "Team Spirit", "Team Falcons", "Navi"],
    "Dota 2": ["Team Spirit", "Team Falcons", "Team Liquid", "Aurora Gaming"],
    "Free Fire": ["All Gamers Global", "Total Gaming Esports", "Apex Gaming", "S8UL Esports"],
    "VALORANT": ["RRQ", "Team Liquid", "Senitels", "Fnatic"],
    "PUBG Mobile": ["DRX", "Team Falcons", "Alpha 7 Esports", "Nigma Galaxy"],
    "PUBG PC": ["Twisted Minds", "Team Falcons", "NAVI", "17 Gaming"],
    "Call Of Duty": ["Team Falcons", "Team Vitality", "Gentle Mates", "FaZe Clan"]
}

roles_by_game = {
    "Counter-Strike 2": ["IGL", "Sniper", "Entry Fragger", "Lurker", "Support"],
    "Dota 2": ["Pos 1 (Carry)", "Pos 2 (Mid)", "Pos 3 (Offlane)", "Pos 4 (Soft Support)", "Pos 5 (Hard Support)"],
    "Free Fire": ["Captain", "Sniper", "Rusher", "Assaulter", "Support"],
    "VALORANT": ["Duelist", "Initiator", "Controller", "Sentinel", "Flex"],
    "PUBG Mobile": ["IGL", "Assaulter", "Assaulter", "Support", "Sniper"],
    "PUBG PC": ["IGL", "Fragger", "Support", "Sniper", "Flex"],
    "Call Of Duty": ["AR Slayer", "SMG Slayer", "Flex", "Anchor", "Objective"]
}

weapons_by_game = {
    "Counter-Strike 2": ["AK-47", "M4A1-S", "AWP", "Desert Eagle", "MAC-10"],
    "Dota 2": ["Blink Dagger", "BKB", "Aghanim's Scepter", "Manta Style", "Heart of Tarrasque"],
    "Free Fire": ["MP40", "AWM", "M1887", "SCAR", "Groza"],
    "VALORANT": ["Vandal", "Phantom", "Operator", "Sheriff", "Spectre"],
    "PUBG Mobile": ["M416", "AKM", "Kar98k", "UMP45", "AWM"],
    "PUBG PC": ["Beryl M762", "M416", "Mini14", "SLR", "Kar98k"],
    "Call Of Duty": ["TAQ-56", "Vaznev-9k", "Kastov 762", "Lachmann Sub", "MCPR-300"]
}

maps_by_game = {
    "Counter-Strike 2": ["Mirage", "Inferno", "Nuke", "Anubis", "Ancient"],
    "Dota 2": ["Radiant", "Dire"],
    "Free Fire": ["Bermuda", "Purgatory", "Kalahari", "Alpine"],
    "VALORANT": ["Ascent", "Bind", "Haven", "Split", "Lotus"],
    "PUBG Mobile": ["Erangel", "Miramar", "Sanhok", "Vikendi"],
    "PUBG PC": ["Erangel", "Miramar", "Taego", "Deston"],
    "Call Of Duty": ["Mercado Las Almas", "Breenbergh Hotel", "El Asilo", "Embassy"]
}

def slugify(text):
    return text.lower().replace(" ", "-").replace(".", "")

mock_data_ts = """import { Game } from './types';

export const mockData: Game[] = [
"""

game_index = 1
for game, teams in games.items():
    game_slug = slugify(game)
    mock_data_ts += f"  {{\n    id: 'g{game_index}',\n    slug: '{game_slug}',\n    title: '{game}',\n    teams: [\n"
    
    team_index = 1
    for team in teams:
        team_slug = slugify(team)
        mock_data_ts += f"      {{\n        id: 't{game_index}_{team_index}',\n        slug: '{team_slug}',\n        name: '{team}',\n        roster: [\n"
        
        # Players
        for p_i in range(5):
            role = roles_by_game[game][p_i]
            w1 = weapons_by_game[game][0]
            w2 = weapons_by_game[game][1] if len(weapons_by_game[game]) > 1 else w1
            w3 = weapons_by_game[game][2] if len(weapons_by_game[game]) > 2 else w1
            
            mock_data_ts += f"          {{ id: 'p{game_index}_{team_index}_{p_i}', ign: '{team_slug[:3]}_{p_i}', role: '{role}', topWeapons: [{{ name: '{w1}', efficiency: 90 }}, {{ name: '{w2}', efficiency: 85 }}, {{ name: '{w3}', efficiency: 80 }}] }},\n"
        
        mock_data_ts += "        ],\n        analytics: {\n          mapsOverview: [\n"
        
        # Maps
        m_list = maps_by_game[game]
        for m in m_list[:4]:
            mock_data_ts += f"            {{ mapName: '{m}', winRate: 65, matchesPlayed: 20 }},\n"
        mock_data_ts += "          ],\n          strongestMaps: [\n"
        
        m1 = m_list[0] if len(m_list) > 0 else 'Map 1'
        m2 = m_list[1] if len(m_list) > 1 else m1
        
        mock_data_ts += f"            {{ mapName: '{m1}', score: 88 }},\n"
        mock_data_ts += f"            {{ mapName: '{m2}', score: 75 }}\n"
        
        mock_data_ts += """          ],
          rotationTactics: "The team excels in slow defaults, heavily relying on map control and late-round executes to secure advantageous positions.",
          detailedOverview: "A veteran roster with numerous championship titles. They are known for their resilience and deep strategic playbook."
        }
      },\n"""
        team_index += 1
    
    mock_data_ts += "    ]\n  },\n"
    game_index += 1

mock_data_ts += "];\n"

with open("src/data/mockData.ts", "w") as f:
    f.write(mock_data_ts)
