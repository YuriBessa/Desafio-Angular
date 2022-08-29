import { TelaLoginRoutingModule } from './tela-login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [TelaLoginComponent, LoginComponent],
  imports: [CommonModule, TelaLoginRoutingModule],
  exports: [TelaLoginComponent],
})
export class TelaLoginModule {}
