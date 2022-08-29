import { LoginComponent } from './login/login.component';
import { TelaLoginComponent } from './tela-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TelaLoginComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaLoginRoutingModule {}
