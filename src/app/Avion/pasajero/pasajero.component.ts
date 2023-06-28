import { Component } from '@angular/core';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.scss']
})
export class PasajeroComponent {
 pasajeros = [
  {
    nombre: 'Irene',
    apellidoPaterno: 'Vargas',
    apellidoMaterno: 'Thamina',
    edad: 28
  }
 ]
}
