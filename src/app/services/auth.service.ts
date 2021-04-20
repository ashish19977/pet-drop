import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// import { KeychainService } from './keychain.service';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router) { }
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return true
    // if (this.keychainService.isLoggedIn()) {

    //   return true;

    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }
}
