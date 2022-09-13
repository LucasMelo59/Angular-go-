import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeMoedaComponent } from './exibe-moeda.component';

describe('ExibeMoedaComponent', () => {
  let component: ExibeMoedaComponent;
  let fixture: ComponentFixture<ExibeMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibeMoedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
