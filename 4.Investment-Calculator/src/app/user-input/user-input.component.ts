import { Component, EventEmitter, Output, output, signal } from '@angular/core';
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
  // @Output() onCalculate = new EventEmitter<InvestmentInput>();
  onCalculate = output<InvestmentInput>();

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {
    this.onCalculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
