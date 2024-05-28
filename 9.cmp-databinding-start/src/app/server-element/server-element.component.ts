import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent {
  ngOnInit() {
    console.log('onInit called');
  }

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges() {
    console.log('onChange called');
  }

  ngOnCheck() {
    console.log('onCheck called');
  }

  ngOnViewInit() {
    console.log('onViewInit called');
  }

  ngOnViewChanges() {
    console.log('onViewChanges called');
  }

  ngOnContentInit() {
    console.log('onContentInit called');
  }

  ngOnContentChanges() {
    console.log('onContentChanges called');
  }
  @Input('srvElement') element: { type: string; name: string; content: string };
}
