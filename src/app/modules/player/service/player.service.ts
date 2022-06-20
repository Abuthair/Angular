import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player';
import { TypeView } from 'src/app/models/type-view';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private _baseurl = 'http://localhost:8123/player-api/players';
  constructor(private _httpClient: HttpClient) {}
  getPlayers = (): Observable<Player[]> => {
    return this._httpClient.get<Player[]>(this._baseurl);
  };
  getDistinctTypes = (Specialist: string): Observable<TypeView[]> => {
    let url = `${this._baseurl}/type/specialist/${Specialist}`;
    return this._httpClient.get<TypeView[]>(url);
  };
  getPlayerById = (id: number): Observable<Player> => {
    let url = `${this._baseurl}/playerId/${id}`;
    return this._httpClient.get<Player>(url);
  };
}
