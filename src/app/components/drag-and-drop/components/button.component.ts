import { Component, Input }  from '@angular/core';
import { DragAndDropComponents } from '../../drag-and-drop/drag-and-drop.model';

@Component({
  template: `
  <strong>This is Button component!</strong>
    <button>
    Click me!
    </button>
  `
})
export class ButtonComponent implements DragAndDropComponents {
  @Input() data: any;
}
