import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient} from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, mergeMap, catchError, finalize, concatMap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Document } from './document.model';

import * as d_actions from './document.actions';
import * as dapi_actions from './document-api.actions';


import { AppState } from '../app-state/app-state';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class DocumentApiEffects {

  private documentAPI = '/api/document/';  // URL to web api

  @Effect()
  loadDocument = this.actions
  .pipe(
    ofType(dapi_actions.DocumentAPIActionTypes.LoadDocument),
    mergeMap( (action: dapi_actions.LoadDocument) => this.http.get<Document>(this.documentAPI + action.payload.id)
      .pipe
      (
        map (document => (new d_actions.LoadDocument ({document: document})) ),
        catchError(() => of({ type: '[Document] Documents Loaded Error' })),
        finalize(() => this.store.dispatch(new dapi_actions.LoadDocumentSucess ()))
      )

    )
  );

  constructor(
    private  http: HttpClient,
    private  actions: Actions,
    public   store: Store<AppState>
  ) {
  }
}
