import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormsModule is needed to use two way data binding [(ngModel)]
import { FormsModule } from '@angular/forms';
// HttpClient Module is needed to make an http request
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { NavComponent } from './nav/nav.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskAddComponent,
    NavComponent,
    TaskEditComponent,
    TaskHomeComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
