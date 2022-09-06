import { DadosAPIVeiculos } from './../../../models/veiculos-api';
import { environment } from './../../../environments/environment';
import { Veiculo, VeiculosAPI } from './../../../models/veiculo.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  constructor(private httpClient: HttpClient) {}

  retornaListaVeiculos() {
    return this.httpClient
      .get<VeiculosAPI>(`${API}/vehicle`)
      .pipe(map((x) => x?.vehicles ?? ''));
  }

  retornaVeiculoId(id: string) {
    return this.httpClient.get<Veiculo>(`${API}/vehicle/${id}`);
  }

  retornaDadosVeiculos(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
      .get<DadosAPIVeiculos>(`${API}/vehicleData`, {
        params,
      })
      .pipe(map((x) => x?.vehicleData ?? ''));
  }
}
