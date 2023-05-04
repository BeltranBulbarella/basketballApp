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
  team_name: string;
  wins: number;
  points_scored: number;
  matches_played: number;
}

export interface PlayerStat {
  id: number;
  player_name: string;
  team_name: string;
  points_scored: number;
  matches_played: number;
  mvps: number;
}

export enum BottomBarCurrent {
  'LastMatches',
  'Standings',
  'Players',
}
