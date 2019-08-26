import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { WellListComponent } from './components/well-list/well-list.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'wellList'
},
{
  path: 'users',
  component: UsersComponent
},
{
  path: 'wellList',
  component: WellListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
