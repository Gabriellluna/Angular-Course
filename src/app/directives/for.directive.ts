import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appFor]',
  standalone: false
})
export class ForDirective implements OnInit {
  

  @Input('appForPiroca') numbers!: number[]
  @Input('appForName') texto!: string[]

  constructor(
    private container : ViewContainerRef, 
    private template : TemplateRef<any>) {
  }

  ngOnInit(): void {
    for (let number of this.numbers){
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
    for (let name of this.texto){
      this.container.createEmbeddedView(this.template, { $implicit: name })
    }
  }
}