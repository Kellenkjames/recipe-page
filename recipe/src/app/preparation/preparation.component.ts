import { Component } from '@angular/core';

interface PreparationStep {
  label: string;
  time: string;
}

@Component({
  selector: 'app-preparation',
  standalone: true,
  imports: [],
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss'],
})
export class PreparationComponent {
  title = 'Preparation Time';

  preparationSteps: PreparationStep[] = [
    { label: 'Total', time: 'Approximately 10 minutes' },
    { label: 'Preparation', time: '5 minutes' },
    { label: 'Cooking', time: '5 minutes' },
  ];
}
