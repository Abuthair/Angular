import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
})
export class PlayerDetailsComponent implements OnInit {
  playerId!: number;
  player!: Player;
  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _playerService: PlayerService,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.
    
    subscribe((map) => {
      let playId = map.get('id');
      if (playId) this.playerId = Number(playId);
      this._playerService.getPlayerById(this.playerId).subscribe({
        next: (data) => (this.player = data),
      });
    });
  }
}
