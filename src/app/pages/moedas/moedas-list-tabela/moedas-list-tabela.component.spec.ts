import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedasListTabelaComponent } from './moedas-list-tabela.component';

describe('MoedasListTabelaComponent', () => {
  let component: MoedasListTabelaComponent;
  let fixture: ComponentFixture<MoedasListTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedasListTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedasListTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
