import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwZoomIn]'
})
export class ZoomInDirective {
  @HostBinding('class.zoom-in') isZoomAvail = true;
  @HostBinding('class.zoom-in-hover') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }

  @Input() set mwZoomIn(value){
    this.isZoomAvail = value;
  }
}