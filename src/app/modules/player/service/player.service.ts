import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private _baseurl = 'http://localhost:8123/player-api/players';
  constructor(private _httpClient: HttpClient) {}
  getPlayers = (): Observable<Player[]> => {
    return this._httpClient.get<Player[]>(this._baseurl);
  };

  getPlayerById = (id: number): Observable<Player> => {
    let url = `${this._baseurl}/playerId/${id}`;
    return this._httpClient.get<Player>(url);
  };

  getPLayerType = (type: string): Observable<Player[]> => {
    let url = `${this._baseurl}/type/${type}`;
    return this._httpClient.get<Player[]>(url);
  };
  getByDistinctPlayerType = (): Observable<string[]> => {
    let url = `${this._baseurl}/distinct/`;
    return this._httpClient.get<string[]>(url);
  };
  
}
