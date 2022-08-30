import { TelaLoginRoutingModule } from './tela-login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TelaLoginComponent, LoginComponent],
  imports: [CommonModule, TelaLoginRoutingModule, FormsModule],
  exports: [TelaLoginComponent],
})
export class TelaLoginModule {}
