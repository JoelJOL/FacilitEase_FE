import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appOnscroll]',
})
export class OnscrollDirective {
  constructor() {}
  @Output() scrolled = new EventEmitter();

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    console.log('hii');
    this.scrolled.emit(event);
  }
}
