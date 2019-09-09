import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[drop-comp]',
})
export class DropCompDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

