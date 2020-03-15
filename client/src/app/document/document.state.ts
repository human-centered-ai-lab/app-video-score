import { ActionReducerMap } from '@ngrx/store';

import * as DocumentReducers from './document.reducer';
import * as DocumentAPIReducers from './document-api.reducer';
import { AppState } from '../app-state/app-state';


export interface AppStateDocument extends AppState  {
    document: any;
  }

export const documentreducers: ActionReducerMap<any> = {
    document:     DocumentReducers.reducer,
    documentapi: DocumentAPIReducers.reducer
};
