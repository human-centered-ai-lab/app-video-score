import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Document } from './document.model';
import { DocumentActions, DocumentActionTypes } from './document.actions';
import { Movie } from '../entities/movie.model';



export interface State  {
    content: any;
    selectedMovieUUID: string;
    selectedFrame: number;
    selectedCE: string,
    selectedCEpos: number,
    selectedCEposDelta: number,
    simplecontent: any;
 }


 export const initialState: State = {
  content: null,
  selectedMovieUUID: '',
  selectedFrame: 0,
  selectedCE: '',
  selectedCEpos: -1,
  selectedCEposDelta: 0.0,
  simplecontent: null
};


export function reducer(
  state = initialState,
  action: DocumentActions
  ): State {
  switch (action.type) {

    case DocumentActionTypes.LoadDocument: {
      return {
        ...state,
        content: action.payload.document,
        simplecontent : null
            };
      return state;
    }
    case DocumentActionTypes.SetSelectedMovieAndFrame: {
      console.log('SELECT  SELECT :' + action.payload.movieuuid);
      return {
        ...state,
        selectedMovieUUID: action.payload.movieuuid,
        selectedFrame : action.payload.fnr,
        selectedCE: action.payload.ce,
        selectedCEpos: action.payload.cepos,
        selectedCEposDelta: action.payload.ceposdelta
      };
      return state;
    }
    case DocumentActionTypes.ClearDocument: {
      return {
        ...state,
        content: null,
        simplecontent: null
            };
      return state;
    }
    default:
      return state;
  }

}

