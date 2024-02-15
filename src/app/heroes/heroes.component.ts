import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  imports: [ FormsModule, NgFor, NgIf, UpperCasePipe, HeroDetailComponent, RouterLink ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService,) {}
}
