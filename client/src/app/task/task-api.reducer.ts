import { Action } from '@ngrx/store';
import { TasksAPIActions, TasksAPIActionTypes } from './task-api.actions';
import { ConditionalExpr } from '@angular/compiler';
import { AppState} from '../app-state/app-state';


export interface State  {
  pending: false;
  error: null;
}

export const initialState: State = {
  pending: false,
  error: null
};

export function reducer(
  state = initialState,
  action: TasksAPIActions
  ): State {
  switch (action.type) {

    case TasksAPIActionTypes.LoadTasks: {
//      console.log ('TasksAPIActionTypes.LoadTasks');
      return Object.assign({}, state, {pending: true, error: null});
    }
    case TasksAPIActionTypes.LoadTasksSucess: {
//      console.log ('TasksAPIActionTypes.LoadTasksSucess');
      return Object.assign({}, state, {pending: false});
    }
    case TasksAPIActionTypes.LoadTasksError: {
      return Object.assign({}, state, {pending: false, error: 'ERROR'});
    }

    default:
      return state;
  }
}
