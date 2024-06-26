import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentInput } from './investment-input.model';
import { InvestmentResult } from './investment-result.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // // resultsData?: InvestmentResult[];
  // resultsData = signal<InvestmentResult[] | undefined>(undefined);
  // calculateInvestmentResults(data: InvestmentInput) {
  //   // console.log(data);
  //   const annualData = [];
  //   const { initialInvestment, annualInvestment, expectedReturn, duration } =
  //     data; //do this as the order of the parameter will not matter
  //   let investmentValue = initialInvestment;
  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }
  //   // console.log(annualData);
  //   this.resultsData.set(annualData);
  // }
}
