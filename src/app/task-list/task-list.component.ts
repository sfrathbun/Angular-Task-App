import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  getTasks(): void {
    this.taskDataService
    .getTasks()
    .subscribe(t => (this.tasks = t));
  }


  onClickDelete(id: number): void {
    if (confirm ('Are you sure you want to delete this task?')) {
      this.taskDataService
      .deleteTask(id)
      .subscribe(t => this.getTasks());
    }

  }

  constructor(private taskDataService : TaskDataService
    ) {}

  ngOnInit() {
    // this is telling the component to get the list of tasks
    this.getTasks();
  }

}
