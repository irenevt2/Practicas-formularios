import { Component } from '@angular/core';
declare interface Asiento{
  codigo: string,
  estado: string,
}
@Component({
  selector: 'app-genera-avion',
  templateUrl: './genera-avion.component.html',
  styleUrls: ['./genera-avion.component.scss']
})
export class GeneraAvionComponent {
  cantidad: number = 4;
  // estado: number = 0;

  asientos:Asiento [] = [];

  generarAsiento(){
    this.asientos=[];
    for(let i=1; i<= this.cantidad; i++){
      let asiento: Asiento = {
        codigo: "ax"+i,
        estado: "0"
      }
      this.asientos.push(asiento)
    }
  }
  cambiar(asiento:Asiento){
    if(asiento.estado == "1"){
      asiento.estado = "0";
    }else{
      asiento.estado = "1";
    }
  }
}
