import { Component, Input, input } from '@angular/core';
import { InvestmentResult } from '../investment-result.model';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  //results = input();
  // @Input() results?: InvestmentResult[];
  results = input<InvestmentResult[]>();
}
