import { Component } from '@angular/core';
import {Task} from '../model/Task';
import {fakeTasksDatabase} from '../fake-tasks-database';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'tasks-list',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  tasks: Task[] = fakeTasksDatabase;
}
