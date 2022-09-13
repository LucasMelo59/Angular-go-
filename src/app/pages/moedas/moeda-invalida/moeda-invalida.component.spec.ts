import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedaInvalidaComponent } from './moeda-invalida.component';

describe('MoedaInvalidaComponent', () => {
  let component: MoedaInvalidaComponent;
  let fixture: ComponentFixture<MoedaInvalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedaInvalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedaInvalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
