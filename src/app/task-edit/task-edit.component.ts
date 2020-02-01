import { Component, OnInit } from "@angular/core";
import { TaskDataService } from "../task-data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Task } from "../task";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
  styleUrls: ["./task-edit.component.css"]
})
export class TaskEditComponent implements OnInit {
  tasks: Task[];

  editTask: Task = new Task();

  // here we are navigating to the list page after we edit and save a task
  saveTask() {
    this.taskDataService
      .editTask(this.editTask)
      .subscribe(tasks => this.router.navigate(["home"]));
  };

  onClickDelete(id: number): void {
    // confirm ('Are you sure you want to delete this task?');
    // I need to put an if statement here
    this.taskDataService
    .deleteTask(id)
    .subscribe(t => this.router.navigate(["home"]));
  };

  constructor(
    private taskDataService: TaskDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.taskDataService
        .getTask(+param["id"])
        .subscribe(t => (this.editTask = t));
    });
  }
}
