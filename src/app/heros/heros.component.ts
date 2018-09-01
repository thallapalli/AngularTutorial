import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros: HERO[];
  constructor(private heroService: HeroService) { }
  getHeros(): void {
  this.heros = this.heroService.getHeros();
}
 
  selectedHero: Hero;
 
 
  constructor() { }
 
  ngOnInit() {
  this.getHeros();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  }
