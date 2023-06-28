import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { TareaComponent } from './tarea/tarea.component';
import { DatePipe } from '@angular/common';
import { FormularioContrasenaComponent } from './formulario-contrasena/formulario-contrasena.component';
import { ConsultaComprobantesComponent } from './consulta-comprobantes/consulta-comprobantes.component';
import { InputNumberDirective } from './directivas/input-number.directive';
import { ReservaVuelosPageComponent } from './reserva-vuelos-page/reserva-vuelos-page.component';
import { GeneraAvionComponent } from './Avion/genera-avion/genera-avion.component';
import { PasajeroComponent } from './Avion/pasajero/pasajero.component';
import { RegistrarPasajeroComponent } from './Avion/registrar-pasajero/registrar-pasajero.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemporizadorComponent,
    FormularioRegistroComponent,
    FormularioContactoComponent,
    TareaComponent,
    FormularioContrasenaComponent,
    ConsultaComprobantesComponent,
    InputNumberDirective,
    ReservaVuelosPageComponent,
    GeneraAvionComponent,
    PasajeroComponent,
    RegistrarPasajeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
