import { Injectable, signal } from '@angular/core';
import { InvestmentInput } from './investment-input.model';
import { InvestmentResult } from './investment-result.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  // resultsData?: InvestmentResult[];
  resultsData = signal<InvestmentResult[] | undefined>(undefined);
  calculateInvestmentResults(data: InvestmentInput) {
    // console.log(data);
    const annualData = [];
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data; //do this as the order of the parameter will not matter

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    // console.log(annualData);
    this.resultsData.set(annualData);
  }
}
