import { Component } from '@angular/core';

@Component({
  selector: 'app-preparation',
  standalone: true,
  imports: [],
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss'],
})
export class PreparationComponent {
  title = 'Preparation Time';
  totalTime = 'Approximately 10 minutes';
  prepartionTime = '5 minutes';
  cookingTime = '5 minutes';
}
