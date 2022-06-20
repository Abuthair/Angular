import { Signing } from './signing';
import { Team } from './team';

export interface Player {
  playerId: number;
  playerName: string;
  age: number;
  country: string;
  batting: string;
  bowling: string;
  specialist: string;
  basePrice: number;
  type: string;
  playerImg: string;
  playerDescription: string;
  team: Team;
  signing: Signing;
}
