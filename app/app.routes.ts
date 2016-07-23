import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component'
const routes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  }, {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
