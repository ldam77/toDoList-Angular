import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() childToDoList: Task[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  priorityColor(task){
    if (task.priority == 3) {
      return "bg-danger";
    } else if (task.priority == 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}
