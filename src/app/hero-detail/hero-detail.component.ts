import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { NgIf } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  imports: [ NgIf, UpperCasePipe, FormsModule ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
