import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare interface Usuario{
  name: string,
  email: string,
  subject: string,
  message: string
}
@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.scss']
})
export class FormularioContactoComponent {
  usuario: Usuario = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }

  formularioContacto: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.formularioContacto = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    })
  }

  get nameControl(){
    return this.formularioContacto.get('name')
  }
  get emailControl(){
    return this.formularioContacto.get('email')
  }
  get subjectControl(){
    return this.formularioContacto.get('subject')
  }
  get messageControl(){
    return this.formularioContacto.get('message')
  }
  guardar(){
    console.log(this.formularioContacto);
    console.log(this.nameControl)
  }
}
