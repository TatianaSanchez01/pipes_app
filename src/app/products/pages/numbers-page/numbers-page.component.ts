import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',

  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css',
})
export class NumbersPageComponent {
  public totalSells: number = 25239.287163;
  public percentage: number = 0.657;
}
