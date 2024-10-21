import {TaskStatus} from '../enums/TaskStatus';


export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  status: TaskStatus;
  dueDate: Date;
}
