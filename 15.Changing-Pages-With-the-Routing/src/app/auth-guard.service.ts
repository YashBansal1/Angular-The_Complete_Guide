import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

// export const authGuard: CanActivateFn = ():
//   | boolean
//   | UrlTree
//   | Observable<boolean | UrlTree>
//   | Promise<boolean | UrlTree> => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
//   return authService.isAuthenticated().then((res) => {
//     if (res) {
//       return true;
//     } else {
//       router.navigate(['/']);
//       return false;
//     }
//   });
// };

// export const authGuardChild: CanActivateChildFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ):
//   | boolean
//   | UrlTree
//   | Observable<boolean | UrlTree>
//   | Promise<boolean | UrlTree> => {
//   return authGuard(route, state);
// };
