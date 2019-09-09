import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, HostListener, EventEmitter, Output } from '@angular/core';

import { DropCompDirective } from './drop.directive';
import { DragAndDropComponents } from './drag-and-drop.model';

@Component({
  selector: 'app-dropped-components',
  template: `
              <div>
                <h3>Dropped Compoents</h3>
                <ng-template drop-comp></ng-template>
              </div>
            `
})
export class DroppedComponentsComponent implements OnInit {
  @Input() dropComponets: any[];

  _currentIndex: number;
  get currentIndex(): number {
    return this._currentIndex;
  }

  @Input('currentIndex')
  set currentIndex(value: number) {
    this._currentIndex = value;
    if (value)
    this.loadComponent();
  }

  @ViewChild(DropCompDirective, { static: true }) dropCompHost: DropCompDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    /* events fired on the draggable target */
  }

  loadComponent() {
    const dropItem = this.dropComponets[this._currentIndex - 1];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dropItem.component);

    const viewContainerRef = this.dropCompHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<DragAndDropComponents>componentRef.instance).data = dropItem.data;
  }

}
