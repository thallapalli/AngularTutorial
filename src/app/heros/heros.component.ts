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

  heros: Hero[];
  constructor(private heroService: HeroService) { }
  getHeros(): void {
  this.heroService.getHeros()
      .subscribe(heros => this.heros = heros);
}
ngOnInit() {
  this.getHeros();
  }
 
  

  }
