import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(
    private _loginservice: LoginserviceService,
    private _router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this._loginservice.isUserLoggedIn()) {
      console.log('Hello User');
      return true;
    } else {
      alert('Please login first');
      this._router.navigate(['login'], {
        queryParams: { returnUrl: route.url },
      });
      return false;
    }
  }
}
