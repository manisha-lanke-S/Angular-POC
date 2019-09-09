import { Component, Input }  from '@angular/core';
import { DragAndDropComponents } from '../../drag-and-drop/drag-and-drop.model';

@Component({
  template: `
  <h1>Most important heading here</h1>
  <h3>Less important heading here</h3>
  <p>Some additional information here.</p>
`
})
export class HeaderComponent implements DragAndDropComponents {
  @Input() data: any;
}
