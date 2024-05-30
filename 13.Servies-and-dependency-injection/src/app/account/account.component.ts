import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  // loggingService = inject(LoggingService);
  @Input() account: { name: string; status: string };
  @Input() accountId: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.statusUpdated.emit(status);
    this.accountsService.updateStatus(this.accountId, status);
    this.loggingService.logStatusChange(status);
  }
}
