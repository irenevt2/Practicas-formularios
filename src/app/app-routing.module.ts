import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComprobantesComponent } from './consulta-comprobantes/consulta-comprobantes.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { FormularioContrasenaComponent } from './formulario-contrasena/formulario-contrasena.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { LoginComponent } from './login/login.component';
import { TareaComponent } from './tarea/tarea.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { ReservaVuelosPageComponent } from './reserva-vuelos-page/reserva-vuelos-page.component';
import { GeneraAvionComponent } from './Avion/genera-avion/genera-avion.component';
import { PasajeroComponent } from './Avion/pasajero/pasajero.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'temporizador',
    component: TemporizadorComponent
  },
  {
    path: 'registro',
    component: FormularioRegistroComponent
  },
  {
    path: 'contacto',
    component: FormularioContactoComponent
  },
  {
    path: 'tarea',
    component: TareaComponent
  },
  {
    path: 'contrasena',
    component: FormularioContrasenaComponent
  },
  {
    path: 'consulta',
    component: ConsultaComprobantesComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo:'login'
  },
  
  // Reserva de vuelos

  // {
  //   path:"vuelo",
  //   component: ReservaVuelosPageComponent,
  //   children:[
  //     {
  //       path: 'reservar',
  //       component: ReservarComponent
  //     }
  //   ]
    
  // }
  

  //Genera tu avion
  {
    path: 'avion',
    component: GeneraAvionComponent,
  },
  {
    path:'avion/pasajeros',
    component: PasajeroComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


