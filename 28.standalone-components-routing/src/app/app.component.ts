import { Component } from "@angular/core";

import { WelcomeComponent } from "./welcome/welcome.component";
import { AppRoutingModule } from "./app-routing.module";

@Component({
  standalone: true,
  imports: [WelcomeComponent, AppRoutingModule],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}
