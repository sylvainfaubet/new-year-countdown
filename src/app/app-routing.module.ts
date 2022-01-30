import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'config' },
  {
    path: 'counter',
    loadChildren: () =>
      import('./features/counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'config',
    loadChildren: () =>
      import('./features/config/config.module').then((m) => m.ConfigModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
