import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskDetailsComponent } from './task-details/task-details.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: TaskHomeComponent },
  {path: "list", component: TaskListComponent },
  {path: "add", component: TaskAddComponent },
  {path: "edit/:id", component: TaskEditComponent },
  {path: "details/:id", component: TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
