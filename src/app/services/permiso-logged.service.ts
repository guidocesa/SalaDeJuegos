import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermisoLoggedService {

  constructor(private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): boolean {

//check some condition  
if (!localStorage.getItem('user'))  {
this.router.navigateByUrl("/login");
//redirect to login/home page etc
//return false to cancel the navigation
return false;
} 
return true;
}
}
