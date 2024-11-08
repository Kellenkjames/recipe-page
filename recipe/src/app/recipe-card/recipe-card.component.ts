import { Component } from '@angular/core';
import { TextContentComponent } from '../text-content/text-content.component';
import { TopImageComponent } from '../top-image/top-image.component';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [TopImageComponent, TextContentComponent],
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  imageUrl = 'assets/images/image-omelette.jpeg';
}
