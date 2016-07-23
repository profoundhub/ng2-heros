import { Component, OnInit, OnDestroy } from '@angular/core';

import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit, OnDestroy {

  @Input() hero: Hero;

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       let id = +params['id'];
       this.heroService.getHero(id)
         .then(hero => this.hero = hero);
     });
   }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  this.sub = this.route.params.subscribe(params => {
    let id = +params['id'];
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  });

  goBack() {
    window.history.back();
  }

}
