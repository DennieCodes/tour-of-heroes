import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  constructor(
    private heroService: HeroService,
  ) {}

}
