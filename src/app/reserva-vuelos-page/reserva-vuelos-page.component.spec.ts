import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVuelosPageComponent } from './reserva-vuelos-page.component';

describe('ReservaVuelosPageComponent', () => {
  let component: ReservaVuelosPageComponent;
  let fixture: ComponentFixture<ReservaVuelosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaVuelosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaVuelosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
