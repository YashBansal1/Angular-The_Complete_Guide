import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() onCalculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  onSubmit() {
    this.onCalculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });

    this.enteredInitialInvestment = '0';
    this.enteredAnnualInvestment = '0';
    this.expectedReturn = '5';
    this.duration = '10';
  }
}
