import { Action } from '@ngrx/store';
import { MoviesAPIActions, MoviesAPIActionTypes } from './movies-api.actions';
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
  action: MoviesAPIActions
  ): State {

  switch (action.type) {

    case MoviesAPIActionTypes.LoadMovies: {
      console.log ('MoviesAPIActionTypes.LoadMovies');
      return Object.assign({}, state, {pending: true, error: null});
    }
    case MoviesAPIActionTypes.LoadMoviesSucess: {
      console.log ('MoviesAPIActionTypes.LoadMoviesSucess');
      return Object.assign({}, state, {pending: false});
    }
    case MoviesAPIActionTypes.LoadMoviesError: {
      return Object.assign({}, state, {pending: false, error: 'ERROR'});
    }

    default:
      return state;
  }
}
