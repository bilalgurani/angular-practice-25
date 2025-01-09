import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSetGreenBg]'
})
export class SetBackgroundDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit() {
    // We don't write this code inside constructor because by the time constructors get called its
    // properties are not initialized yet
    // this.element.nativeElement.style.color = "red";
    // We avoid using the element.nativeElement.style.color because it directly manipulates the DOM,
    // Data binding, template and components are in sync but once we use this it will bypass and due to XSS injections
    // security reason we avoid this.
    // SOLUTION:
    // We RENDERER2
    this.renderer.setStyle(this.element.nativeElement, "color", "blue")
    this.renderer.setStyle(this.element.nativeElement, "font-weight", "bold")
  }
}
