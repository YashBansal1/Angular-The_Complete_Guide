import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    // TasksComponent,
    // TaskComponent,
    // NewTaskComponent,
    // CardComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
