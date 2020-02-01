import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {

  tasks: Task[];

  getTasks(): void {
    this.taskDataService
    .getTasks()
    .subscribe(t => (this.tasks = t));
  }

  onClickDelete(id: number) : void {
    // confirm ('Are you sure you want to delete this task?');
    // I need to put an if statement here
    this.taskDataService
    .deleteTask(id)
    .subscribe(t => this.getTasks());
  }

  constructor(private taskDataService : TaskDataService) {
  }

  ngOnInit() {
    // this is telling the component to get the list of tasks
    this.getTasks();
  }

}
