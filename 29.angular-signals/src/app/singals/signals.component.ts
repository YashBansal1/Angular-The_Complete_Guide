import { NgFor } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    this.counter.update((prev) => prev + 1);
    // this.counter.set(this.counter()+1);
    // this.actions.push("INCREMENT");
    this.actions.mutate((prev) => prev.push("INCREMENT"));
  }

  decrement() {
    this.counter.update((prev) => prev - 1);
    // this.actions.mutate((prev) => prev.push("DECREMENT"));
    this.actions.update((prev) => [...prev, "DECREMENT"]);
  }
}
