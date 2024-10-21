import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fakeTasksDatabase} from './fake-tasks-database';
import {Task} from './interfaces/Task';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, DatePipe, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskManager';
  tasks: Task[] = fakeTasksDatabase;
}
