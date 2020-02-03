import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  myTask = new Task;
  id: number;

  onClickDelete(id: number): void {
    if (confirm ('Are you sure you want to delete this task?')) {
    this.taskData
    .deleteTask(id)
    .subscribe(t => this.router.navigate(["home"]));
    }};

  constructor(
    private taskData : TaskDataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = +params["id"];
      this.taskData
      .getTask(this.id)
      .subscribe(t => (this.myTask = t));
    });
  }
}
