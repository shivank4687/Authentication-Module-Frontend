import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRoles = route.data['roles'] as Array<string>; // Get roles from route data
    const userRole = '';//this.authService.getUserRole(); // Get the user's role from AuthService

    if (requiredRoles && requiredRoles.includes(userRole)) {
      return true;
    } else {
      // Redirect to a forbidden page or home page
      this.router.navigate(['/forbidden']);
      return false;
    }
  }
}