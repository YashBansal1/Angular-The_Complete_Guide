import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   'backgroundColor',
    //   'blue'
    // );
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //   this.render.setStyle(
    //     this.elementRef.nativeElement,
    //     'background-color',
    //     'green'
    //   );
    // this.backgroundColor = 'green';
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'red'
    // );
    // this.backgroundColor = 'red';
    this.backgroundColor = this.highlightColor;
  }
}
