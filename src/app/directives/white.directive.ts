import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWhite]',
  standalone: false
})
export class WhiteDirective {

  constructor(el : ElementRef) { 
    el.nativeElement.style.backgroundColor = "#FFFFFF"
  }

}
