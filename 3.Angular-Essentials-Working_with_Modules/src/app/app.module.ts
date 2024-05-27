import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { DatePipe } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    HeaderComponent,
    CardComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, DatePipe, FormsModule],
})
export class AppModule {}
