import { Component } from "@angular/core";
import { AnalyticsService } from "src/app/shared/analytics.service";
import { HighlightDirective } from "src/app/shared/highlight.directive";

@Component({
  selector: "app-details",
  standalone: true,
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
  imports: [HighlightDirective], //or import the shared module
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
