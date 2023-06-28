import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraAvionComponent } from './genera-avion.component';

describe('GeneraAvionComponent', () => {
  let component: GeneraAvionComponent;
  let fixture: ComponentFixture<GeneraAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraAvionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneraAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
