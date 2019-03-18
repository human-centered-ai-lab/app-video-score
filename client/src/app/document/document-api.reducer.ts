import { Action } from '@ngrx/store';
import { DocumentAPIActions, DocumentAPIActionTypes } from './document-api.actions';
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
  action: DocumentAPIActions
  ): State {
  switch (action.type) {

    case DocumentAPIActionTypes.LoadDocument: {
      console.log ('DocumentAPIActionTypes.LoadDocument');
      return Object.assign({}, state, {pending: true, error: null});
    }
    case DocumentAPIActionTypes.LoadDocumentSucess: {
      console.log ('DocumentAPIActionTypes.LoadDocumentSucess');
      return Object.assign({}, state, {pending: false});
    }
    case DocumentAPIActionTypes.LoadDocumentError: {
      return Object.assign({}, state, {pending: false, error: 'ERROR'});
    }

    default:
      return state;
  }
}
