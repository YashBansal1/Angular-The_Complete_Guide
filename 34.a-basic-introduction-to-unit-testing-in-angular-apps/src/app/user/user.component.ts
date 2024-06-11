import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [UserService, DataService],
})
export class UserComponent implements OnInit {
  user: {
    name: string;
  };
  isLoggedIn = false;
  data: any;
  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.user = this.userService.user;
    // console.log(this.userService.user);
    this.dataService.getDetails().then((data) => {
      this.data = data;
    });
  }
}
