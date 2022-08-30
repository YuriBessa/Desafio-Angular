import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient) {}

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.httpClient.post(`${API}/user/login`, {
      userName: usuario,
      password: senha,
    });
  }
}