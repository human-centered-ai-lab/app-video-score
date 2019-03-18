import { createSelector } from '@ngrx/store';
import { adapter } from './task.reducer';
import { Task} from './task.model';
import { AppState} from '../app-state/app-state';

const { selectEntities, selectAll } = adapter.getSelectors();


export const selectTaskState = (state: AppState) => state.task.tasks;

export const selectAllTasks  = createSelector(
  selectTaskState,
  selectAll);

  export const selectTasksEntities = createSelector(
    selectTaskState,
    selectEntities);
