import { MenuLateralModule } from './../componentes/menu-lateral/menu-lateral.module';
import { LogoutMenuModule } from './../componentes/logout-menu/logout-menu.module';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaDashboardRoutingModule } from './tela-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { TabelaInformacoesComponent } from './tabela-informacoes/tabela-informacoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    TabelaInformacoesComponent,
  ],
  imports: [
    CommonModule,
    TelaDashboardRoutingModule,
    LogoutMenuModule,
    MenuLateralModule,
    CabecalhoModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TelaDashboardModule {}
