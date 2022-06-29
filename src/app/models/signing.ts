import { Player } from './player';
import { Team } from './team';

export class Signing {
  constructor(
    public signingId: number,
    public price: number,
    public teamId: number,
    public player: Player,
    public season: string
  ) {}
}
