import { Injectable } from '@angular/core';
import { Hero } from './hero';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

  export class HeroService {

    private heroesUrl = 'app/heroes';  // URL to web api

    constructor(private http: Http) { }

    getHeroes() {
      return this.http.get(this.heroesUrl)
                 .toPromise()
                 .then(response => response.json().data as Hero[])
                 .catch(this.handleError);
    }

    getHeroesSlowly() {
      return new Promise<Hero[]>(resolve =>
        setTimeout(() => resolve(HEROES), 2000) // 2 seconds
      );
    }

    getHero(id: number) {
      return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
    }

  }
