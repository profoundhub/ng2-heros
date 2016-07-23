import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <a [routerLink]="['/heroes']">Heroes</a>
   <router-outlet></router-outlet>
   `,
   directives: [HeroesComponent, ROUTER_DIRECTIVES],
   providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
