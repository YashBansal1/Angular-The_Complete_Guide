import { Component, Input, computed, inject, input } from '@angular/core';
import { InvestmentResult } from '../investment-result.model';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  //results = input();
  // @Input() results?: InvestmentResult[];
  // results = input<InvestmentResult[] | undefined>();
  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultsData;
  // }
  //or
  // results = computed(() => this.investmentService.resultsData());
  //or
  results = this.investmentService.resultsData.asReadonly();
}
