import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/models/roles';
import { LoginserviceService } from './loginservice.service';

type RouteData = {
  roles: Roles[];
};
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
    // const currentUser = this._loginservice.getUser();
    // if (!currentUser) {
    //   return false;
    // }
    // const rolesOfUser = currentUser.roles;
    // const rolesAllowed = (route.data as RouteData).roles;
    // console.log(rolesAllowed);
    // const isRoleAvailable = rolesAllowed.some((role: Roles) => {
    //   return rolesOfUser.indexOf(role) > -1;
    // });
    // console.log('isRoleAvailable', isRoleAvailable);
    // return isRoleAvailable;

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
