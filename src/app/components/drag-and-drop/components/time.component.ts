import { Component, Input }  from '@angular/core';
import { DragAndDropComponents } from '../../drag-and-drop/drag-and-drop.model';

@Component({
  template: ` <b>It's</b> {{currentTime}} <b>now</b>.`
})
export class TimeComponent implements DragAndDropComponents {
  @Input() data: any;
  currentTime
  constructor() {
      this.currentTime = new Date();
  }
}


