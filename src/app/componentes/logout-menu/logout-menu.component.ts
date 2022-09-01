import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-menu',
  templateUrl: './logout-menu.component.html',
  styleUrls: ['./logout-menu.component.css'],
})
export class LogoutMenuComponent implements OnInit {
  mostraMenuLogout = false;
  usuario$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  abrirMenuLogout(): void {
    this.mostraMenuLogout = !this.mostraMenuLogout;
  }

  deslogar(): void {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
