import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logStatusChange(status: string) {
    console.log(`Status changed to ${status}`);
  }
}
