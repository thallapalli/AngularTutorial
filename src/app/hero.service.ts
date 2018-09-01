import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  getHeros(): Hero[] {
  return HEROS;
}
}
