import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { TypeView } from 'src/app/models/type-view';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
  playerId!: number;
  player!: Player;
  players: Player[] = [];
  playerType: Player[] = [];
  distinctTypes: string[] = [];
  constructor(private _playerService: PlayerService, private _router: Router) {}

  ngOnInit(): void {
    this._playerService.getPlayers().subscribe({
      next: (data) => {
        this.players = data;
        console.log(this.players);

        this._playerService.getByDistinctPlayerType().subscribe({
          next: (data) => (this.distinctTypes = data),
        });
      },
    });
  }

  getPLayerType = (type: string) => {
    this.players = [];
    this._router.navigate(['/player-list', type]);
    this._playerService.getPLayerType(type).subscribe({
      next: (data) => {
        this.playerType = data;
      },
    });
  };

  showDetails = (playerId: number) => {
    this._router.navigate(['player-details/', playerId]);
  };
}
