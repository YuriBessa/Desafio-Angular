import { VeiculoService } from './../veiculos/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-tabela-informacoes',
  templateUrl: './tabela-informacoes.component.html',
  styleUrls: ['./tabela-informacoes.component.css'],
})
export class TabelaInformacoesComponent implements OnInit {
  valorCampoTabela!: string;

  campoTabela = new FormControl();

  constructor(private veiculoService: VeiculoService) {}

  infoVeiculos$ = this.campoTabela.valueChanges.pipe(
    filter((valorDigitado) => valorDigitado.length == 20),
    distinctUntilChanged(),
    switchMap((valorDigitado) =>
      this.veiculoService.retornaDadosVeiculos(valorDigitado)
    )
  );

  ngOnInit(): void {}
}
