import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare interface Usuario {
  name: string,
  email: string,
  age: number,
  password: string
}

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})



export class FormularioRegistroComponent {
  usuario: Usuario = {
    name: "",
    email: "",
    age: 0,
    password: ""
  }

  formularioRegistro: FormGroup;
  
  constructor(private formBuider: FormBuilder){
    this.formularioRegistro = this.formBuider.group({
      // 'name': ['', [Validators.required]]
      name: new FormControl ('', [Validators.required]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]) 
    });
    
  }

  get nameControl(){
    return this.formularioRegistro.get('name')
  }
  get emailControl(){
    return this.formularioRegistro.get('email')
  }
  get ageControl(){
    return this.formularioRegistro.get('age')
  }
  get passwordControl(){
    return this.formularioRegistro.get('password')
  }
  guardar(){
    console.log(this.formularioRegistro) 
    console.log(this.formularioRegistro.get('name'));
    console.log(this.formularioRegistro.get('email'));
    console.log(this.formularioRegistro.get('age'));
    console.log(this.formularioRegistro.get('password'));
  }
  
}
