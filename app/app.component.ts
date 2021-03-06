import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroesComponent } from './heroes.component';

import './rxjs-extensions';

@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a> |
     <a [routerLink]="['/heroes']">Heroes</a>
     <router-outlet></router-outlet>
   </nav>
   `,
   styleUrls: ['app/app.component.css'],
   directives: [HeroesComponent, ROUTER_DIRECTIVES],
   providers: [HeroService]
})

export class AppComponent {
  title = 'Daniel\'s Tour of Heroes';
}
