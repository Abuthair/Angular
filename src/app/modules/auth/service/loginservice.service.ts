import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Roles } from 'src/app/models/roles';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  // private user: User | undefined;
  // users: User[] = [
  //   {
  //     username: 'u1',
  //     password: 'root',
  //     roles: [Roles.ADMIN, Roles.USER],
  //   },
  // ];
  // login(username: string) {
  //   const user = this.users.find((user) => user.username === username);
  //   this.user = user;
  //   return !!user;
  // }

  // getUser() {
  //   return this.user;
  // }
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
