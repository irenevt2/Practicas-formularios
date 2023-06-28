import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaComprobantesComponent } from './consulta-comprobantes.component';

describe('ConsultaComprobantesComponent', () => {
  let component: ConsultaComprobantesComponent;
  let fixture: ComponentFixture<ConsultaComprobantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaComprobantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaComprobantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
