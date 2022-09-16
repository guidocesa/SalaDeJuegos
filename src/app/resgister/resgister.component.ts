import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth, private router:Router) { }

  pswdDontMatch:boolean = false;

  ngOnInit(): void {
  }

  async register(email:any, pass : any, confirm:any)
  {
    if(pass != confirm)
    {
      this.pswdDontMatch = true;
    }
    else
    {
      this.pswdDontMatch = false;
      const user = await this.fireAuth.createUserWithEmailAndPassword(email, pass);
      if(user)
      {
        this.router.navigateByUrl('/bienvenido');
      }
    }

  }

}
