import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TaskActionTypes } from './task.actions';

@Injectable()
export class TaskEffects {

  @Effect()
  loadTasks$ = this.actions$.pipe(ofType(TaskActionTypes.LoadTasks));

  constructor(private actions$: Actions) {}
}
