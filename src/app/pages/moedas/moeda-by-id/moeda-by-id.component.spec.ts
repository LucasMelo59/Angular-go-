import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedaByIdComponent } from './moeda-by-id.component';

describe('MoedaByIdComponent', () => {
  let component: MoedaByIdComponent;
  let fixture: ComponentFixture<MoedaByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedaByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedaByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
