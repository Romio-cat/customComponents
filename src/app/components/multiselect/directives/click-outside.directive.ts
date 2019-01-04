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
  public close({ target }: MouseEvent): void {
    if (!target) {
      return;
    }

    const clickedDeleteButton: boolean = (<HTMLElement>target).matches('.delete-item');
    const clickedInside: boolean = this._elementRef.nativeElement.contains(target);

    if (!clickedInside && !clickedDeleteButton) {
      this.clickOutside.emit(false);
    }
  }
}
