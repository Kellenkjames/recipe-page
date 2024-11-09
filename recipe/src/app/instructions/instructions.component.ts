import { Component } from '@angular/core';

interface InstructionStep {
  instruction: string;
  details: string;
}

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [],
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent {
  title = 'Instructions';

  instructionSteps: InstructionStep[] = [
    {
      instruction: 'Beat the eggs',
      details:
        'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      instruction: 'Heat the pan',
      details:
        'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      instruction: 'Cook the omelette',
      details:
        'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      instruction: 'Add fillings (optional)',
      details:
        'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      instruction: 'Fold and serve',
      details:
        'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      instruction: 'Enjoy',
      details: 'Serve hot, with additional salt and pepper if needed.',
    },
  ];
}
