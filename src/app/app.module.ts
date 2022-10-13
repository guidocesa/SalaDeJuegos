import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { JuegosComponent } from './juegos/juegos.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { MayormenorComponent } from './juegos/mayormenor/mayormenor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickerComponent } from './juegos/clicker/clicker.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogoResultadoEncuestaComponent } from './dialogo-resultado-encuesta/dialogo-resultado-encuesta.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    BienvenidoComponent,
    ResgisterComponent,
    QuienSoyComponent,
    NavbarComponent,
    JuegosComponent,
    ChatroomComponent,
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    ClickerComponent,
    EncuestaComponent,
    DialogoResultadoEncuestaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [AuthService, { provide: MatDialogRef, useValue: {}}, DialogoResultadoEncuestaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
