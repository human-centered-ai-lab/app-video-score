import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Task } from './task.model';

export enum TasksAPIActionTypes {
  LoadTasks       = '[Tasks API] Load Tasks',
  LoadTasksSucess = '[Tasks API] Load Tasks Success',
  LoadTasksError  = '[Tasks API] Load Tasks Error',
  AddTask         = '[Tasks API] Add Task',
  AddTaskSucess   = '[Tasks API] Add Success',
  AddTaskError    = '[Tasks API] Add Error',
  SyncTask        = '[Tasks API] Sync Task'
}

export class LoadTasks implements Action {
  readonly type = TasksAPIActionTypes.LoadTasks;
}

export class LoadTasksSucess implements Action {
  readonly type = TasksAPIActionTypes.LoadTasksSucess;
}

export class LoadTasksError implements Action {
  readonly type = TasksAPIActionTypes.LoadTasksError;
}

export class AddTask implements Action {
  readonly type = TasksAPIActionTypes.AddTask;
}

export class AddTaskSucess implements Action {
  readonly type = TasksAPIActionTypes.AddTaskSucess;
}

export class AddTaskError implements Action {
  readonly type = TasksAPIActionTypes.AddTaskError;
}

export class SyncTask implements Action {
  readonly type = TasksAPIActionTypes.SyncTask;
  constructor(public payload: { task: Update<Task> }) {}
}

export type TasksAPIActions =
LoadTasks
  | LoadTasksSucess
  | LoadTasksError
  | AddTask
  | AddTaskSucess
  | AddTaskError
  | SyncTask ;
