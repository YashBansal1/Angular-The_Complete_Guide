import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
    console.log('BasicHighlightDirective constructor');
  }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
