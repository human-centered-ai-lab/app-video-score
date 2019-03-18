import { Injectable } from '@angular/core';
import { Observable, Observer, Subject, of } from 'rxjs';
import { filter, map, find, skip, take, tap, delay, mapTo, concat } from 'rxjs/operators';

import { AppState } from './app-state/app-state';
import { Store, select } from '@ngrx/store';

import * as MovieAPIActions from './entities/movies-api.actions';
import * as TasksAPIActions from './task/task-api.actions';

import { SseService } from './sse.service';
import { ConditionalExpr } from '@angular/compiler';

const webSockerUrl = 'ws:/127.0.0.1:8077/socket.io/';

export interface SyncOperation {
  storeID: string;
  operation: string;
  payload: any;
}


@Injectable({
  providedIn: 'root'
})

export class SyncstoreService {

  public messages: Observable<SyncOperation>;

  constructor(public   store: Store<AppState>,
              sseServ: SseService) {
    console.log('SyncstoreService make observable');

    this.messages = sseServ.getEvent().pipe (
      map ((response: MessageEvent): SyncOperation => {
        const data = JSON.parse(response.data);
        return {
          storeID:      data.storeID,
          operation:    data.operation,
          payload:      data.payload
              };
          }
      ));
      this.messages.subscribe ( op  => this.dispatchSyncOperation(op) );
    }

  dispatchSyncOperation (op: SyncOperation) {
  //  console.log (op);
    switch (op.storeID) {
      case 'MOVIE': {
        this.dispatchMovieOperation(op);
        break;
      }
      case 'TASK': {
        this.dispatchTaskOperation(op);
        break;
      }
      default: {
          break;
      }
    }
  }

  dispatchMovieOperation (op: SyncOperation) {
    switch (op.operation) {
      case 'UPDATE': {
        this.store.dispatch(new MovieAPIActions.SyncMovie ({movie: op.payload}));
        break;
      }
      default: {
          break;
      }
    }
  }

  dispatchTaskOperation (op: SyncOperation) {
    switch (op.operation) {
      case 'LOAD': {
        console.log ("****************** RELOAD TASKS")
        this.store.dispatch(new TasksAPIActions.LoadTasks ());
        break;
      }
      case 'UPDATE': {
        this.store.dispatch(new TasksAPIActions.SyncTask ({task: op.payload}));
        break;
      }
      default: {
          break;
      }
    }
  }

  


}
