import { Component } from '@angular/core';
import { TopImageComponent } from '../top-image/top-image.component';
import { TextContentComponent } from '../text-content/text-content.component';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [TopImageComponent, TextContentComponent],
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {}
