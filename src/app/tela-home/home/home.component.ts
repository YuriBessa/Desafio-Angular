import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  abrirLogoutMenu(): void {
    console.log('o menu de Logout clicado');
  }

  abrirMenuLateral(): void {
    console.log('o menu de Logout clicado');
  }
}
