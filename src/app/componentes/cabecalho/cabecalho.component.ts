import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  abrirLogoutMenu(): void {
    console.log('o menu de Logout clicado');
  }

  abrirMenuLateral(): void {
    console.log('o menu de Logout clicado');
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
