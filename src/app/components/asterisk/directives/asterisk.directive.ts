import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[required]'
})
export class AsteriskDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    const parent = this.renderer.parentNode(this.el.nativeElement);
    console.log('this.renderer', this.renderer);
    console.log('this.el', this.el);
    console.log('parent.getElementsByTagName(\'LABEL\')', parent.getElementsByTagName('LABEL'));
    console.log('parent.getElementsByClassName(\'required-asterisk\')', parent.getElementsByClassName('required-asterisk'));

    if (parent.getElementsByTagName('LABEL').length && !parent.getElementsByClassName('required-asterisk').length) {
      parent.getElementsByTagName('LABEL')[0].innerHTML += '<span class="required-asterisk">*</span>';
    }
  }
}
