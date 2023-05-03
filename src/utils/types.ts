export interface Player {
  id: string;
  name: string;
  number: string;
  team: Team;
  teamId: string;
}

export interface Team {
  id: string;
  imageURL: string;
  key: string;
  name: string;
  players: Player[];
}

export interface PlayerMatchStat {
  id: number;
  player: Player;
  playerId: string;
  points: number;
}

export interface Match {
  awayTeamId: string;
  awayTeamPlayersMatchStats: PlayerMatchStat[];
  awayTeamPoints: number;
  game_date: string;
  homeTeamId: string;
  homeTeamPlayersMatchStats: PlayerMatchStat[];
  homeTeamPoints: number;
  id: string;
  mvp: Player;
  mvpId: string;
}

export interface StandingStat {
  id: number;
  team: string;
  wins: number;
  losses: number;
  percentage: number;
  pointsFor: number;
  pointsAgainst: number;
}

export interface PlayerStat {
  id: number;
  name: string;
  team: string;
  points: number;
  ppm: number;
  mvp: number;
}

export enum BottomBarCurrent {
  'LastMatches',
  'Standings',
  'Players',
}
