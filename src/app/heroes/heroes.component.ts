import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero : Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService){}

  ngOnInit() {
    this.getHeroes();
    this.selectedHero = this.heroService.getHeroById(0);
  }

  getHeroes():void{
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(id: number): void {
    this.selectedHero = this.heroService.getHeroById(id);
  }
}
