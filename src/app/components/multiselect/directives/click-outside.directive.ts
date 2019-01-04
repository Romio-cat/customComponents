import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private _elementRef: ElementRef) { }

  @Output()
  public clickOutside = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event'])
  public close(event: MouseEvent): void {
    if (!event.target) {
      return;
    }

    const clickedDeleteButton: boolean = (<HTMLButtonElement>event.target).nodeName === 'BUTTON';
    const clickedInside: boolean = this._elementRef.nativeElement.contains(event.target);

    if (!clickedInside && !clickedDeleteButton) {
      this.clickOutside.emit(false);
    }
  }
}
