import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

declare interface Cliente{
  ruc: number,
  fechaEmision: string,
  tipoDoc: string,
  serie: string,
  numero: string,
  monto: string
}

@Component({
  selector: 'app-consulta-comprobantes',
  templateUrl: './consulta-comprobantes.component.html',
  styleUrls: ['./consulta-comprobantes.component.scss']
})
export class ConsultaComprobantesComponent {
  now = this.datePipe.transform(new Date(), "yyyy-MM-dd")
  minDate : string | null = "";

  formConsulta: FormGroup;
  cliente : Cliente = {
    ruc: 0,
    fechaEmision: "",
    tipoDoc: "",
    serie: "",
    numero: "",
    monto: ""
  }

  // tipos de Comprobantes ***********
  tipoDocumentos = [
    {
      codigo: "01",
      denominacion: "Factura"
    },
    {
      codigo: "03",
      denominacion: "Boleta"
    },
    {
      codigo: "07",
      denominacion: "Nota de Crédito"
    },
    {
      codigo: "08",
      denominacion: "Nota de Débito"
    }

  ]

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ){
    this.formConsulta = this.formBuilder.group({
      ruc: new FormControl('', [Validators.required, Validators.minLength(11)]),
      fechaEmision: new FormControl('', [Validators.required]),
      tipoDoc: new FormControl('01', [Validators.required]),
      serie:  new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      monto: new FormControl('', [Validators.required])
    })
  }


  ngOnInit(){
    let now = new Date();
    now.setFullYear(now.getFullYear()-2)
    // now.setMonth(now.getMonth()-1)
    this.minDate = this.datePipe.transform(now, "yyyy-MM-dd")
  }


  get rucControl(){
    return this.formConsulta.get('ruc')
  }
  get fechaEmisionControl(){
    return this.formConsulta.get('fechaEmision')
  }
  get tipoDocControl(){
    return this.formConsulta.get('tipoDoc')
  }
  get serieControl(){
    return this.formConsulta.get('serie')
  }
  get numeroControl(){
    return this.formConsulta.get('numero')
  }
  get montoControl(){
    return this.formConsulta.get('monto')
  }


  consultar(){
    console.log(this.rucControl)
  }
}
