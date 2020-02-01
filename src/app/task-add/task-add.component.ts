import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  newTask: Task = new Task();

// after we add a new task we are telling Angular to navigate back to the list
  addTask() {
    this.TaskDataService
    .addTask(this.newTask)
    .subscribe(t => this.router.navigate(["home"]));
    console.log('Submit Successful: ', this.newTask);
  }

  constructor(private TaskDataService : TaskDataService, private router : Router) { }

  ngOnInit() {
  }

}
