import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Encuesta } from '../services/encuesta';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogoResultadoEncuestaComponent } from '../dialogo-resultado-encuesta/dialogo-resultado-encuesta.component';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuestas: any;
  usuarioActual:string | null;
  admin = '"admin@gmail.com"';

  public forma: FormGroup;
  pais:any = {
    name: {
      common: ""
    },
    foto: ""
  };

  constructor(private fb: FormBuilder, private afs: AngularFirestore, public dialog: MatDialog) { 

    this.usuarioActual = localStorage.getItem('user');

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'telefono': ['', [this.lengthValidator, Validators.required]],
      'pregunta1': ['', Validators.required],
      'pregunta2': ['', Validators.required],
      'pregunta3': ['', Validators.required]
    });

  }

  private lengthValidator(control: AbstractControl): null | object{
    const telefono = <string>control.value;
    const length = telefono.length;
    
    if(length != 10)
    {
      return length
      ? { okLength: true}
      : null
    }
    return null;

  }

  ngOnInit(): void {
    this.encuestas = this.afs.collection('encuestas');
    
  }

  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }

  public aceptar(): void {
    var encuesta: Encuesta = this.forma.getRawValue();
    this.encuestas.add(encuesta);
  }

  openResultadosDialog()
  {
    this.dialog.open(DialogoResultadoEncuestaComponent);
  }

}
