import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PROVIDED_FIRESTORE_INSTANCES } from '@angular/fire/firestore/firestore.module';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {


  itemImageUrl:string = "../../../assets/cartas.jpg";
  cartas: Array<number> = new Array();
  right:number = 0;
  bottom:number = 0;
  aciertos:number = 0;
  numeroAnterior:number = 0;

  


  constructor(private afs: AngularFirestore) { 

    
  }
  
  
  ngOnInit(): void {
    var cartaAzar = Math.trunc(Math.random()*52);
    this.numeroAnterior = cartaAzar%13;
    this.right = (225 * (cartaAzar % 13));
    this.bottom = ( Math.trunc(cartaAzar / 13) * 315);
  }

  getSpriteStyle = function(id:number)
  {
    var palo = Math.trunc(id / 13);
    console.log('background-position: ' + (225 * (id % 13)) + ' ' + (palo * 315) + 'px;');
    return 'background-position: ' + (225 * (id % 13)) + ' ' + (palo * 315) + 'px;';
  }

  apuestaMayor()
  {
    var cartaAzar = Math.trunc(Math.random()*52);
    if(this.numeroAnterior <= cartaAzar%13)
    {
      this.aciertos++;
    }
    else
    {
      this.perdio();
    }
    this.numeroAnterior = cartaAzar%13;
    this.right = (225 * (cartaAzar % 13));
    this.bottom = ( Math.trunc(cartaAzar / 13) * 315);
  }

  apuestaMenor()
  {
    var cartaAzar = Math.trunc(Math.random()*52);
    if(this.numeroAnterior >= cartaAzar%13)
    {
      this.aciertos++;
    }
    else
    {
      this.perdio();
    }
    this.right = (225 * (cartaAzar % 13));
    this.numeroAnterior = cartaAzar%13;
    this.bottom = ( Math.trunc(cartaAzar / 13) * 315);
  }

  perdio()
  {
    var puntajesMayorMenor = this.afs.collection('puntajesMayorMenor');

    var nuevoPuntaje = {
      nombre: localStorage.getItem('user'),
      fecha: Date.now(),
      puntaje: this.aciertos
    }
  
    puntajesMayorMenor.add(nuevoPuntaje);

    this.aciertos = 0;
  }

  cartaRandom()
  {
    var carta:HTMLDivElement = document.getElementsByClassName("carta")[0] as HTMLDivElement;
    var cartaAzar = Math.trunc(Math.random()*52);
    this.right = (225 * (cartaAzar % 13));
    this.bottom = ( Math.trunc(cartaAzar / 13) * 315);
    this.numeroAnterior = cartaAzar%13;
  }
  
}
