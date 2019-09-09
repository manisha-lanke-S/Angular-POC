import { Component, Input }  from '@angular/core';
import { DragAndDropComponents } from '../../drag-and-drop/drag-and-drop.model';

@Component({
  template: `
  <strong>This is Text Area component!</strong>
    <textarea>
    This is Text Area component!!!!!!!!!!
    </textarea>
  `
})
export class TextAreaComponent implements DragAndDropComponents {
  @Input() data: any;
}


