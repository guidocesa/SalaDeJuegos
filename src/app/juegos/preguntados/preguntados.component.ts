import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesAPIService } from 'src/app/services/countries-api.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  constructor(private countries:CountriesAPIService) { }

  ngOnInit(): void {
    this.countries.todos().subscribe(
      banderas=>{
        console.info(banderas);  
      this.misBanderas = banderas; 
    }  );
    
    this.misPaises = this.countries.todos();
    this.cargarPregunta();
  }

    opcion1 = {
      img: "",
      nombre: ""
    };
    opcion2 = {
      img: "",
      nombre: ""
    };
    opcion3 = {
      img: "",
      nombre: ""
    };
    opcion4 = {
      img: "",
      nombre: ""
    };

    correcto:number = 0;
    misBanderas:any[]|undefined;
    misPaises:Observable<any>|undefined;
    bandera:string = "";

  cargarPregunta()
  {
    this.countries.todos().subscribe(t =>
      {
        var random = Math.floor(Math.random() * 200);

        this.opcion1.img = t[random + 12].flags.png;
        this.opcion1.nombre = t[random +12].name.common;
        this.opcion2.img = t[random +7].flags.png;
        this.opcion2.nombre = t[random+7].name.common;
        this.opcion3.img = t[random+21].flags.png;
        this.opcion3.nombre = t[random+21].name.common;
        this.opcion4.img = t[random+32].flags.png;
        this.opcion4.nombre = t[random+32].name.common;
        
        this.correcto = Math.floor(Math.random() * 4 );

        switch(this.correcto)
        {
          case 0:
            this.bandera = this.opcion1.nombre;
            break;
          case 1:
            this.bandera = this.opcion2.nombre;
            break;
          case 2:
            this.bandera = this.opcion2.nombre;
            break;
          case 3:
            this.bandera = this.opcion2.nombre;
            break;
        }

        console.log(this.bandera);

        
      }


    )
  }

  
  buscarPais(nombre:string){
    this.countries.pais(nombre).subscribe(t=>
      
        this.bandera = t[0].flags.png
      )

  }

}
