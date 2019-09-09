import { Component, Input } from '@angular/core';
import { DragAndDropComponents } from '../../drag-and-drop/drag-and-drop.model';

@Component({
    template: `
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
`
})
export class FooterComponent implements DragAndDropComponents {
    @Input() data: any;
}
