import { Component } from '@angular/core';

interface NutritionValues {
  type: string;
  value: string;
}

@Component({
  selector: 'app-nutrition',
  standalone: true,
  imports: [],
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss'],
})
export class NutritionComponent {
  title = 'Nutrition';
  desc =
    'The table below shows nutritional values per serving without the additional fillings.';

  nutritionValues: NutritionValues[] = [
    { type: 'Calories', value: '277kcal' },
    { type: 'Carbs', value: '0g' },
    { type: 'Protein', value: '20g' },
    { type: 'Fat', value: '22g' },
  ];
}
