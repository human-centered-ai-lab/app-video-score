import { ActionReducerMap } from '@ngrx/store';

import * as TaskReducers from './task.reducer';
import * as TaskAPIReducers from './task-api.reducer';
import { AppState } from '../app-state/app-state';


export interface AppStateTask extends AppState  {
    task: any;
  }

export const taskreducers: ActionReducerMap<any> = {
    tasks:    TaskReducers.reducer,
    tasksapi: TaskAPIReducers.reducer
};
