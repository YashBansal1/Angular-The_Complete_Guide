import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  constructor() {
    //this.avatar = DUMMY_USERS[0].avatar;
  }
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => '../../assets/users/' + this.avatar());
  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // }
  }
}
