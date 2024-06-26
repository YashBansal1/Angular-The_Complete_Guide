import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log(this.route.snapshot.params);
  }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params['name'],
    };
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params.id;
      this.user.name = params.name;
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
