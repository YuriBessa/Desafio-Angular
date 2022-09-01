import { MenuLateralModule } from './../menu-lateral/menu-lateral.module';
import { LogoutMenuModule } from './../logout-menu/logout-menu.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [CommonModule, RouterModule, LogoutMenuModule, MenuLateralModule],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}
