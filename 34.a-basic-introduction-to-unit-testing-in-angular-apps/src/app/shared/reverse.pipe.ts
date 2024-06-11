import { Pipe } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe {
  transform(value: string): string {
    if (value) {
      return value.split('').reverse().join('');
    }
    return '';
  }
}
