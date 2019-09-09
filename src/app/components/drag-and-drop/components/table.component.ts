import { Component, Input } from '@angular/core';
import { DragAndDropComponents } from '../../drag-and-drop/drag-and-drop.model';

@Component({
    template: `
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
`
})
export class TableComponent implements DragAndDropComponents {
    @Input() data: any;
}


