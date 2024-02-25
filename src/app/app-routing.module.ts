import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  enableViewTransitions: true,
  useHash: false,
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100],
};

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'example',
    loadComponent: () =>
      import('./pages/example/example.component').then(
        (x) => x.ExampleComponent,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
