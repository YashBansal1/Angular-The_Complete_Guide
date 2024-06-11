import { Component } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {}
