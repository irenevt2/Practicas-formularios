import { Component } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.scss']
})
export class TemporizadorComponent {
  mostrarMensaje = false;
  tiempo_segundo=0;
  hora=0;
  minuto=0;
  segundo=0;

  iniciar(){
    this.mostrarMensaje=false;
    this.descontar();
  }
  
  descontar(){
    if(this.tiempo_segundo>0){
      this.tiempo_segundo--;
      let now = new Date();
      this.hora = now.getHours();
      this.minuto = now.getMinutes();
      this.segundo = now.getSeconds();
      // alert('cambuio');
      setTimeout(()=>{
        this.descontar()
      }, 1000);
    }else{
      this.mostrarMensaje = true;
    }
  }

  // ngModel
  aceptoTerminos=false

  // seleccion de pais

  paisSeleccionado="";
  
}



