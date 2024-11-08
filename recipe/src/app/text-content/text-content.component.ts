import { Component } from '@angular/core';
import { IngredientsComponent } from '../ingredients/ingredients.component';
import { InstructionsComponent } from '../instructions/instructions.component';
import { NutritionComponent } from '../nutrition/nutrition.component';
import { PreparationComponent } from '../preparation/preparation.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-text-content',
  standalone: true,
  imports: [
    TitleComponent,
    PreparationComponent,
    IngredientsComponent,
    InstructionsComponent,
    NutritionComponent,
  ],
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss'],
})
export class TextContentComponent {}
