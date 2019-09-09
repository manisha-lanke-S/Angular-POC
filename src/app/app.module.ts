import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { WellListComponent } from './components/well-list/well-list.component';
import { WellComponent } from './components/well/well.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { ButtonComponent } from './components/drag-and-drop/components/button.component';
import { TextAreaComponent } from './components/drag-and-drop/components/text-area.component';
import { DroppedComponentsComponent } from './components/drag-and-drop/dropped-components.component';
import { DropCompDirective } from './components/drag-and-drop/drop.directive';
import { DragAndDropComponentsService } from './components/drag-and-drop/drag-and-drop.service';
import { HeaderComponent } from './components/drag-and-drop/components/header.component';
import { FooterComponent } from './components/drag-and-drop/components/footer.component';
import { TableComponent } from './components/drag-and-drop/components/table.component';
import { TimeComponent } from './components/drag-and-drop/components/time.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WellListComponent,
    WellComponent,
    DragAndDropComponent,
    ButtonComponent,
    TextAreaComponent,
    DroppedComponentsComponent,
    DropCompDirective,
    HeaderComponent, FooterComponent, TableComponent, TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [DragAndDropComponentsService],
  entryComponents: [ButtonComponent, TextAreaComponent, HeaderComponent, FooterComponent, TableComponent, TimeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
