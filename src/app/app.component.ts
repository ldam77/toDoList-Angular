import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  toDoList: Task[] = [new Task('Mow Lawn'), new Task('Organize Closet'), new Task('Water Grass')];  
}
