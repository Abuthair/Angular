import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Signing } from 'src/app/models/signing';

@Injectable({
  providedIn: 'root',
})
export class SigningService {
  private _baseurl = 'http://localhost:8123/signing-api/signings';
  constructor(private _httpClient: HttpClient,private_activatedRoute: ActivatedRoute) {}
  addSigning =(signing:Signing,playerId:number): Observable<Signing> => {
    let url= `${this._baseurl}/playerId/${playerId}`;
    return this._httpClient.post<Signing>(url,signing);
  }
}
