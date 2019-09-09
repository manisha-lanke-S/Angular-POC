import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragAndDropComponentsService } from './drag-and-drop.service';
import { DragAndDrop } from './drag-and-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  dropComponets: DragAndDrop[];
  currentIndex;
  droppedComponent = [];

  constructor(private dragAndDropComponentsService: DragAndDropComponentsService) {}

  ngOnInit() {
    this.dropComponets = this.dragAndDropComponentsService.getDraggedComponents();
  }

  drop(event: any) {
    this.currentIndex = event.previousIndex + 1;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // const compName = event.previousContainer.data[event.previousIndex].value;
      // const texta = event.previousContainer.data[event.previousIndex].name;
      // event.container.element.nativeElement.innerHTML = `<b>` + compName + `</b><br>` + `This is ` + compName + ` component<br><` + texta + `>` + event.previousContainer.data[event.previousIndex].data + `</` + texta + `>`
      // transferArrayItem(event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex);
    }
  }
}
