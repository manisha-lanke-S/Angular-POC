import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  droppedComponent = [];
  draggedComponent = [{
    name: 'textarea',
    value: 'Text Area',
    data: 'This is text area!!!!!!'
  },
  {
    name: 'button',
    value: 'Button',
    data: 'Click me!!'
  },
  {
    name: 'header',
    value: 'Header',
    data: `
            <h1>Most important heading here</h1>
            <h3>Less important heading here</h3>
            <p>Some additional information here.</p>
          `
  },
  {
    name: 'footer',
    value: 'Footer',
    data: `
            <p>Posted by: Hege Refsnes</p>
            <p>Contact information: <a href="mailto:someone@example.com">
            someone@example.com</a>.</p>
          `
  },
  {
    name: 'table',
    value: 'Table',
    data: `
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
          `
  },
  {
    name: 'time',
    value: 'Time',
    data: '10:00'
  }]


  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const compName = event.previousContainer.data[event.previousIndex].value;
      const texta = event.previousContainer.data[event.previousIndex].name;
      event.container.element.nativeElement.innerHTML = `<b>` + compName + `</b><br>` + `This is ` + compName + ` component<br><` + texta + `>` + event.previousContainer.data[event.previousIndex].data + `</` + texta + `>`
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
