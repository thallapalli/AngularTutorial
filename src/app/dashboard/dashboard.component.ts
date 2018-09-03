import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heros: Hero[] = [];
 

  constructor(private heroService: HeroService,private location: Location) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
      .subscribe(heros => this.heros = heros.slice(1, 5));
  }
  
 
 goBack(): void {
  this.location.back();
}
}
