import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeMoedasComponent } from './exibe-moedas.component';

describe('ExibeMoedasComponent', () => {
  let component: ExibeMoedasComponent;
  let fixture: ComponentFixture<ExibeMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibeMoedasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
