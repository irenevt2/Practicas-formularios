import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajeroDatosComponent } from './pasajero-datos.component';

describe('PasajeroDatosComponent', () => {
  let component: PasajeroDatosComponent;
  let fixture: ComponentFixture<PasajeroDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasajeroDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasajeroDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
