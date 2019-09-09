import { Injectable } from '@angular/core';
import { DragAndDrop } from './drag-and-drop';
import { ButtonComponent } from './components/button.component';
import { TextAreaComponent } from './components/text-area.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { TableComponent } from './components/table.component';
import { TimeComponent } from './components/time.component';

@Injectable()
export class DragAndDropComponentsService {
    getDraggedComponents() {
        return [
          new DragAndDrop(TextAreaComponent, {name: 'TextArea'}),
          new DragAndDrop(ButtonComponent, {name: 'Button'}),
          new DragAndDrop(HeaderComponent, {name: 'Header'}),
          new DragAndDrop(FooterComponent, {name: 'Footer'}),
          new DragAndDrop(TableComponent, {name: 'Table'}),
          new DragAndDrop(TimeComponent, {name: 'Time'})
        ];
      }
}