import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavbarComponent, refresh } from '../navbar/navbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() newLoginEvent = new EventEmitter<any>();

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth
  ) {}

	ngOnInit() {
	}


  async login(email: any, pass: any)
  {
    const user = await this.fireAuth.signInWithEmailAndPassword(email, pass).
    catch(function(error)
    {

    })
    if(user)
    {
      localStorage.setItem('user', JSON.stringify(user));
      await this.router.navigateByUrl("/quiensoy");
      refresh();
    }
    else{
      alert("Mal credenciales");
    }
  }

}

