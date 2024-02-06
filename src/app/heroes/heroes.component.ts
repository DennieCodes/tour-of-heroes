import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import {
  /* . . . */
  NgFor,
  /* . . . */
} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [ NgFor, ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
}
