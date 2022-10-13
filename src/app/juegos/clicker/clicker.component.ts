import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {
  
  
  comienzo:boolean = false;
  reiniciar:boolean = false;
  clicks:number = 0;
  tiempo:number;
  cuentaRegresiva:any;
  circuloElem= <HTMLElement>document.querySelector('.tablero');

  constructor(private afs: AngularFirestore) {
  this.tiempo=30;
   }
  

  ngOnInit(): void {
  }

  comenzar(){
    this.comienzo=true;
    if(this.tiempo !=0){
      this.clicks++;
    }
    

    if(this.clicks == 1){
      this.cuentaRegresiva = setInterval(()=>{ 
      
      this.tiempo--;
      //console.log(this.tiempo);
       if(this.tiempo==0 ) {
         clearInterval(this.cuentaRegresiva);
         var puntajesClicker = this.afs.collection('puntajesClicker');

         var nuevoPuntaje = {
           nombre: localStorage.getItem('user'),
           fecha: Date.now(),
           puntaje: this.clicks
         }
       
         puntajesClicker.add(nuevoPuntaje);
         this.reiniciar=true;
        }
      }, 1000);
    }
  }

  reset(){
    this.tiempo=30;
    this.clicks=0;
    this.comienzo=false;
    this.reiniciar=false;
    
  }



}
