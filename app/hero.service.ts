import { Injectable } from '@angular/core';

@Injectable()

  export class HeroService {
    getHeroes() {
      return HEROES;
    }
  }
