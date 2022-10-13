import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermisoAdminService {

  constructor(private router:Router) { }

  canActivate() : boolean
  {
    if(localStorage.getItem('user') == "admin@gmail.com")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
