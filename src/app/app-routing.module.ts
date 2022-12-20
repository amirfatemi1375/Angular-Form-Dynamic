import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME } from './config/route/routes';

const routes: Routes = [
  {
    path: HOME,
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    redirectTo: HOME,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
