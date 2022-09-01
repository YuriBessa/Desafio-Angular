import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaInformacoesComponent } from './tabela-informacoes.component';

describe('TabelaInformacoesComponent', () => {
  let component: TabelaInformacoesComponent;
  let fixture: ComponentFixture<TabelaInformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaInformacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
