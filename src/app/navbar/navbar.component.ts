import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedin: boolean = false;
  user:any = null;


  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null || localStorage.getItem('user')!.length > 4 )
    {
      this.loggedin = true;
    }
    else
    {
      this.loggedin = false;
    }
  }

  logout()
  {
    localStorage.removeItem("user");
    window.location.reload();
  }

}


export function refresh()
{
  window.location.reload();
}