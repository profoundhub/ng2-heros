import { Component, OnInit, OnDestroy } from '@angular/core';

import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} Details:</h2>
    <div><label>ID: </label>{{hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`
})

export class HeroDetailComponent {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

}
