import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare interface Usuario{
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string
}
@Component({
  selector: 'app-formulario-contrasena',
  templateUrl: './formulario-contrasena.component.html',
  styleUrls: ['./formulario-contrasena.component.scss']
})
export class FormularioContrasenaComponent {
  formPassword: FormGroup;
  usuario: Usuario={
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  }
  constructor(
    private formBuilder:FormBuilder
  ){
    this.formPassword = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordConfirmation: new FormControl('', [Validators.required])
    }, {validators: this.validarConfirmacion})
  }

  validarConfirmacion(formGroup:FormGroup){
    let password = "", passwordConfirmation=""
    password = formGroup.get('password')?.value;
    passwordConfirmation = formGroup.get('passwordConfirmation')?.value;
    if(passwordConfirmation.includes(password)){
      return null;
    }else{
      return {
        noConfirmation : true
      }
    }
  }
  get nameControl(){
    return this.formPassword.get('name');
  }
  get emailControl(){
    return this.formPassword.get('email');
  }
  get passwordControl(){
    return this.formPassword.get('password');
  }
  get passwordConfirmationControl(){
    return this.formPassword.get('passwordConfirmation');
  }

  guardar(){
    console.log(this.formPassword)
  }

}






