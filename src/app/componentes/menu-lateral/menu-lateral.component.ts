import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
})
export class MenuLateralComponent implements OnInit {
  mostraMenuLat = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  abrirMenuLateral(): void {
    this.mostraMenuLat = !this.mostraMenuLat;
  }
}
