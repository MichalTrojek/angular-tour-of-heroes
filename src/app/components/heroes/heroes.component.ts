import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/moct-heroes';
import { Hero } from './interface/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;

  selectedHero?: Hero;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
