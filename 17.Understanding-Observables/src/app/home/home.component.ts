import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}
  private firstObsSubscription: Subscription;

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = new Observable((observer) => {
      //Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        // if (count === 5) {
        //   observer.complete();
        // }
        // if (count > 5) {
        //   observer.error(new Error('Count is greater than 5!'));
        // }
      }, 1000);
    });

    const transformedIntervalObservable = customIntervalObservable.pipe(
      filter((data: number) => {
        return data % 2 === 0;
      }),
      map((data) => {
        return 'Round: ' + (+data + 1);
      })
    );

    this.firstObsSubscription =
      // customIntervalObservable.subscribe(
      transformedIntervalObservable.subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          console.log('completed');
        }
      );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
