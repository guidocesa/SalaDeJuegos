import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { JuegosComponent } from './juegos/juegos.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { MayormenorComponent } from './juegos/mayormenor/mayormenor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { ClickerComponent } from './juegos/clicker/clicker.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { PermisoLoggedService } from './services/permiso-logged.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full"},
  { path: 'juegos', component: JuegosComponent, children:
  [
    {path:'ahorcado', component: AhorcadoComponent},
    {path:'mayormenor', component: MayormenorComponent},
    {path:'preguntados', component: PreguntadosComponent},
    {path: 'clicker', component: ClickerComponent}
  ],canActivate: [PermisoLoggedService]},
  { path: 'login', component: LoginComponent}, 
  { path: 'bienvenido', component: BienvenidoComponent},
  { path: 'register', component: ResgisterComponent},
  { path: 'quiensoy', component: QuienSoyComponent, canActivate: [PermisoLoggedService]},
  { path: 'chatroom', component: ChatroomComponent, canActivate: [PermisoLoggedService]},
  { path: 'encuesta', component: EncuestaComponent, canActivate: [PermisoLoggedService]},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
