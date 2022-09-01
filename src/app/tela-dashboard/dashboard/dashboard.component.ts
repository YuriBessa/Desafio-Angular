import { VeiculoService } from './../veiculos/veiculo.service';
import { Veiculo } from './../../../models/veiculo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  veiculos$ = this.veiculoService.retornaListaVeiculos();
  veiculoId!: string;
  veiculoEscolhido!: Veiculo;

  constructor(private veiculoService: VeiculoService) {}

  enviaVeiculoId(id: string) {
    this.veiculoService.retornaVeiculoId(id).subscribe((veiculoEscolhido) => {
      this.veiculoEscolhido = veiculoEscolhido;
    });
  }
}
