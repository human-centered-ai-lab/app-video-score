import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient} from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, mergeMap, catchError, finalize, concatMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Task } from './task.model';

import * as TaskActions from './task.actions';
import * as TaskAPIActions from './task-api.actions';


import { AppState } from '../app-state/app-state';

@Injectable()
export class TaskApiEffects {

  private taskAPI = '/api/tasks';  // URL to web api

  @Effect()
  loadTasks$ = this.actions$
  .pipe(
    ofType(TaskAPIActions.TasksAPIActionTypes.LoadTasks),
    mergeMap(() => this.http.get<Task[]>(this.taskAPI)
      .pipe
      (
        map (tasks => (new TaskActions.LoadTasks ({tasks: tasks})) ),
        catchError(() => of({ type: '[Task] Tasks Loaded Error' })),
        finalize(() => this.store.dispatch(new TaskAPIActions.LoadTasksSucess ()))
      )

    )
  );

  @Effect()
  syncTask$ = this.actions$
  .pipe(
    ofType<TaskAPIActions.SyncTask>(TaskAPIActions.TasksAPIActionTypes.SyncTask),
//    tap (() => console.log('have to sync a task')),
    concatMap( syncaction => [
      new TaskActions.UpdateTask( {task: syncaction.payload.task} )
    ])
  );


  constructor(
    private  http: HttpClient,
    private  actions$: Actions,
    public   store: Store<AppState>
  ) {
  }
}
