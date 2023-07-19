import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../_services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userAuthService.getToken() !== null){
      const role = route.data['role'];
      console.log('------------------->'+role);
      if(role){
        console.log('------------------->'+this.userAuthService.getRole());
        if(role === this.userAuthService.getRole()){
          console.log('------------------->'+role);
          return true;
        }else{
          this.router.navigate(['/login']);
          return false;
        }
      }

    }
    // this.router.navigate(['/login']);
    this.router.navigate(['/forbidden']);
    return false;
  }
  
}
