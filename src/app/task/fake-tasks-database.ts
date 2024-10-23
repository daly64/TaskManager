import {TaskStatus} from './model/TaskStatus';
import { Task } from './model/Task';

// This is a fake database of tasks. It is just an array of tasks that are created here.
export const fakeTasksDatabase: Task[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Task ${i + 1}`,
  description: `This is the description of task #${i + 1}`,
  completed: i % 2 === 0,
  status: (() => {
    switch (i % 3) {
      case 0: return TaskStatus.Completed;
      case 1: return TaskStatus.InProgress;
      default: return TaskStatus.NotStarted;
    }
  })(),
  dueDate: new Date(Date.now() + (i + 1) * 1000 * 60 * 60 * 24),
}));
