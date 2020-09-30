import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    let authInfo = {
      authenticated: false
    };

    if (authInfo.authenticated) {
      this.router.navigate(["menu/details/0"]);
      return false;
    }

    return true;
  }
}