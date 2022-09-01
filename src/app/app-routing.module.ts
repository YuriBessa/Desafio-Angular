import { LoginGuard } from './autenticacao/login.guard';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./tela-login/tela-login.module').then((m) => m.TelaLoginModule),
    canLoad: [LoginGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./tela-home/home.module').then((m) => m.HomeModule),
    canLoad: [AutenticacaoGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./tela-dashboard/tela-dashboard.module').then(
        (m) => m.TelaDashboardModule
      ),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
