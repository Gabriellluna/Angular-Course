import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appFor]',
  standalone: false
})
export class ForDirective implements OnInit {
  

  @Input('appForEm') numbers!: number[]
  @Input('appForUsando') texto!: string

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.numbers)
    console.log(this.texto)
  }
}