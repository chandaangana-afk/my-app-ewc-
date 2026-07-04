import { useState, useMemo } from 'react';
import { Game, Team, Player } from '../data/types';
import { mockData } from '../data/mockData';

export type ViewLevel = 'games' | 'teams' | 'roster' | 'analytics';

export function useAnalyticsState() {
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [viewLevel, setViewLevel] = useState<ViewLevel>('games');

  const selectedGame = useMemo(() => {
    return mockData.find((g) => g.id === selectedGameId) || null;
  }, [selectedGameId]);

  const selectedTeam = useMemo(() => {
    return selectedGame?.teams.find((t) => t.id === selectedTeamId) || null;
  }, [selectedGame, selectedTeamId]);

  const selectGame = (gameId: string) => {
    setSelectedGameId(gameId);
    setSelectedTeamId(null);
    setViewLevel('teams');
  };

  const selectTeam = (teamId: string) => {
    setSelectedTeamId(teamId);
    setViewLevel('roster');
  };

  const goToAnalytics = () => {
    setViewLevel('analytics');
  };

  const goBackToGames = () => {
    setSelectedGameId(null);
    setSelectedTeamId(null);
    setViewLevel('games');
  };

  const goBackToTeams = () => {
    setSelectedTeamId(null);
    setViewLevel('teams');
  };

  const goBackToRoster = () => {
    setViewLevel('roster');
  };

  const breadcrumbs = useMemo(() => {
    const crumbs = [{ label: 'EWC 2026', onClick: goBackToGames }];
    if (selectedGameId && selectedGame) {
      crumbs.push({ label: selectedGame.title, onClick: goBackToTeams });
    }
    if (selectedTeamId && selectedTeam) {
      crumbs.push({ label: selectedTeam.name, onClick: goBackToRoster });
    }
    if (viewLevel === 'analytics') {
      crumbs.push({ label: 'Analytics', onClick: goToAnalytics });
    }
    return crumbs;
  }, [selectedGameId, selectedTeamId, viewLevel, selectedGame, selectedTeam]);

  return {
    games: mockData,
    selectedGame,
    selectedTeam,
    viewLevel,
    selectGame,
    selectTeam,
    goToAnalytics,
    breadcrumbs,
  };
}
