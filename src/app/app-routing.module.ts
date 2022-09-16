import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { JuegosComponent } from './juegos/juegos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full"},
  { path: 'juegos', component: JuegosComponent},
  { path: 'login', component: LoginComponent}, 
  { path: 'bienvenido', component: BienvenidoComponent},
  { path: 'register', component: ResgisterComponent},
  { path: 'quiensoy', component: QuienSoyComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
