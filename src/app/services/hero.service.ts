import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../components/heroes/interface/hero';
import { HEROES } from '../moct-heroes';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeroes$(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
