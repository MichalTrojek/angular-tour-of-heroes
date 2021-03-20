import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Hero } from './interface/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes$().subscribe((data) => (this.heroes = data));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
