import { Component } from '@angular/core';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipeCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
