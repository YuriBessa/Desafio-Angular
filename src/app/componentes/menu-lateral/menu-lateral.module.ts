import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral.component';

@NgModule({
  declarations: [MenuLateralComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuLateralComponent],
})
export class MenuLateralModule {}
