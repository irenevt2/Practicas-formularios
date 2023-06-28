import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContrasenaComponent } from './formulario-contrasena.component';

describe('FormularioContrasenaComponent', () => {
  let component: FormularioContrasenaComponent;
  let fixture: ComponentFixture<FormularioContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioContrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
