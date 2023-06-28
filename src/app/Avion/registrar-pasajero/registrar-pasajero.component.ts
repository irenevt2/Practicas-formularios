import { Component } from '@angular/core';

interface Pais {
  codigo: string,
  nombre: string,
  bandera: string
}

@Component({
  selector: 'app-registrar-pasajero',
  templateUrl: './registrar-pasajero.component.html',
  styleUrls: ['./registrar-pasajero.component.scss']
})
export class RegistrarPasajeroComponent {
  paises: Pais[] = [
    {
      codigo: '+51',
      nombre: 'Peru',
      bandera: 'https://cdn-icons-png.flaticon.com/512/330/330497.png'
    },
    {
      codigo: '+55',
      nombre: 'Brasil',
      bandera: 'https://cdn-icons-png.flaticon.com/512/330/330430.png'
    },
    {
      codigo: '+57',
      nombre: 'Mexico',
      bandera: 'https://cdn-icons-png.flaticon.com/512/330/330433.png'
    },
    {
      codigo: '+57',
      nombre: 'Argentina',
      bandera: 'https://cdn-icons-png.flaticon.com/512/330/330433.png'
    },
    {
      codigo: '+57',
      nombre: 'Colombia',
      bandera: 'https://cdn-icons-png.flaticon.com/512/330/330433.png'
    },
    {
      codigo: '+57',
      nombre: 'Ecuador',
      bandera: 'https://cdn-icons-png.flaticon.com/512/330/330433.png'
    },

  ]
}
