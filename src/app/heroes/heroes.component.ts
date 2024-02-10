import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../hero.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [ FormsModule, NgFor, NgIf, UpperCasePipe, HeroDetailComponent ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
}
