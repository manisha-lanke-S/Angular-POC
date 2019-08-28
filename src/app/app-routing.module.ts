import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { WellListComponent } from './components/well-list/well-list.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'dragAndDrop'
},
{
  path: 'users',
  component: UsersComponent
},
{
  path: 'wellList',
  component: WellListComponent
},
{
  path: 'dragAndDrop',
  component: DragAndDropComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
