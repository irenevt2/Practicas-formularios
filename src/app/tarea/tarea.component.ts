import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

declare interface Tarea{
  title: string,
  description: string,
  startDate: string,
  finishDate: string
}

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {
 now = this.datePipe.transform(new Date(), "yyyy-MM-dd")
 registroTarea: FormGroup;

 tarea: Tarea={
  title: "",
  description: "",
  startDate: "",
  finishDate: ""
 }
 constructor(
  private formBuilder: FormBuilder,
  private datePipe: DatePipe
  ){
  this.registroTarea = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    startDate: new FormControl('', [Validators.required]),
    finishDate: new FormControl('', [Validators.required] )
  }, { 
    // validators: this.validatorTitleAndDescription 
    validators: [this.validarFechaFinal, this.validatorTitleAndDescription]
  });

  /*this.registroTarea.controls["title"].valueChanges.subscribe(()=>{
    this.registroTarea.controls["description"].updateValueAndValidity()
  })*/
 }

 get titleControl(){
  return this.registroTarea.get('title');
 }
 get descriptionControl(){
  return this.registroTarea.get('description');
 }
 get startDateControl(){
  return this.registroTarea.get('startDate')
 }
 get finishDateControl(){
  return this.registroTarea.get('finishDate')
 }

 validatorTitleAndDescription(formGroup: FormGroup){
  console.log(formGroup)
  //sconsole.log(this.registroTarea)
  let title = "", description= "";
  
    title = formGroup.get('title')?.value;
    description = formGroup.get('description')?.value;

  
  console.log(title)
  console.log(description)
  if(description.includes(title)){
    return null
  }else{
    return {
      noTitle: true
    }
  }
 }

 validarFechaFinal(formGroup: FormGroup){
  console.log(formGroup.get('startDate')?.value)
  console.log(formGroup.get('finishDate')?.value)
  let finishDate_value = formGroup.get('finishDate')?.value;
  if(finishDate_value == "")
    return null

  const startDate  = new Date(formGroup.get('startDate')?.value);
  const finishDate  = new Date(finishDate_value);

  if(startDate <= finishDate){
      return null;
    }else{
      return {
        posterior: true
      }
    }

  // const startDate = new Date(this.startDateControl?.value);
  // const finishDate = new Date(this.finishDateControl?.value);
  // if(startDate<= finishDate){
  //   return null;
  // }else{
  //   return {
  //     posterior: true
  //   }
  // }
}

 validarA(){
  return (control:AbstractControl)=>{
    let value = control.value;
    console.log(value);
    if(value.includes('a')){
      return null;
    }else{
      return {
        sinA: true
      }
    }
  }
 }

validarAngular(){
  return (control:AbstractControl)=>{
    let value = control.value;
    if(value.includes('angular')){
      return null;
    }else{
      return {
        angular:true
      }
    }
  }
}

validarDeTitle(){  
  return (control:any)=>{    
    if(this.registroTarea){
      let title = this.titleControl?.value;     
      if(control.value.includes(title)){
        return null
      }else{
        return {
          noIncluye: true
        }
      }
    }
    return null;
  }
}



validarTexto(texto:string){
  return(control:any)=>{
    let value = control.value;
    if(value.includes(texto)){
      return null;
    }else{
      return{
        noIncluye:true
      }
    }
  }
}

 guardar(){
  console.log(this.registroTarea);
  console.log(this.titleControl);
  console.log(this.descriptionControl);
  console.log(this.startDateControl);
  console.log(this.finishDateControl);
 }

}
