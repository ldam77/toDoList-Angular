import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule }  from '@angular/forms';
import { CompletenessPipe } from './completeness.pipe';


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    CompletenessPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
