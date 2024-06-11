import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// import { AppModule } from './app/app.module';
import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { bootstrapApplication } from "@angular/platform-browser";
import { AnalyticsService } from "./app/shared/analytics.service";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [AnalyticsService],
})
  .then(() => {
    console.log("Application started");
  })
  .catch((err) => console.error(err));

// platformBrowserDynamic().
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
