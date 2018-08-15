import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterToDoList: Task[] = [
    new Task('Mow Lawn', 1),
    new Task('Organize Closet', 3),
    new Task('Water Grass', 2)
  ];

  selectedTask: Task = null;

  editTask(clickedTask){
    this.selectedTask = clickedTask;
  }

  deleteTask(clickedTask) {
    let index = this.masterToDoList.indexOf(clickedTask);
    this.masterToDoList.splice(index,1);
  }


  finishEditing(){
    this.selectedTask = null;
  }

  addNewTask(newTask: Task) {
    this.masterToDoList.push(newTask);
  }

}
