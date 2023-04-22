import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isToken!: boolean

  constructor(private router: Router, private auth: ApiService) { }

  canActivate() {

    if (this.auth.getToken()) {
      return true
    }
    else{
      this.router.navigate(['/home']);
      return false
    }
  }
}