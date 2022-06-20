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
  constructor(
 
    private _playerService: PlayerService,
    private _router: Router
  ) {}
  // specialist: string = '';
  // typesViews: TypeView[] = [];
  ngOnInit(): void {
    this._playerService.getPlayers().subscribe({
      next: (data) => {
        this.players = data;
        console.log(this.players);
      },
    });
  }

  showDetails = (playerId: number) => {
    this._router.navigate(['player-details/', playerId]);
  };
}
