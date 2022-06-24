import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  isLoggedIn!: boolean;
  constructor() {
    this.isLoggedIn = false;
  }
  isUserLoggedIn = () => {
    return this.isLoggedIn;
  };
  loginUser = (username: string, password: string): Observable<boolean> => {
    if (username === 'RCB' && password === 'Rcb123') {
      this.isLoggedIn = true;

      return of(this.isLoggedIn);
    } else {
      return of(false);
    }
  };
}