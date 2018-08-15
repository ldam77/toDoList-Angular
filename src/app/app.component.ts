import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  toDoList: Task[] = [new Task('Mow Lawn', 1), new Task('Organize Closet', 3), new Task('Water Grass', 2)];

  selectedTask: Task = null;

  editTask(clickedTask){
    this.selectedTask = clickedTask;
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

  finishEditing(){
    this.selectedTask = null;
  }

}
