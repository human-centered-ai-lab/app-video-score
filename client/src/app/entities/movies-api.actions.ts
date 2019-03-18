import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Movie } from './movie.model';

export enum MoviesAPIActionTypes {
  LoadMovies       = '[Movies API] Load Movies',
  LoadMoviesSucess = '[Movies API] Load Movies Success',
  LoadMoviesError  = '[Movies API] Load Movies Error',
  AddMovie         = '[Movies API] Add Movie',
  AddMovieSucess   = '[Movies API] Add Success',
  AddMovieError    = '[Movies API] Add Error',
  SyncMovie        = '[Movies API] Sync Movie'
}

export class LoadMovies implements Action {
  readonly type = MoviesAPIActionTypes.LoadMovies;
}

export class LoadMoviesSucess implements Action {
  readonly type = MoviesAPIActionTypes.LoadMoviesSucess;
}

export class LoadMoviesError implements Action {
  readonly type = MoviesAPIActionTypes.LoadMoviesError;
}

export class AddMovie implements Action {
  readonly type = MoviesAPIActionTypes.AddMovie;
}

export class AddMovieSucess implements Action {
  readonly type = MoviesAPIActionTypes.AddMovieSucess;
}

export class AddMovieError implements Action {
  readonly type = MoviesAPIActionTypes.AddMovieError;
}

export class SyncMovie implements Action {
  readonly type = MoviesAPIActionTypes.SyncMovie;
  constructor(public payload: { movie: Update<Movie> }) {}
}

export type MoviesAPIActions =
LoadMovies
  | LoadMoviesSucess
  | LoadMoviesError
  | AddMovie
  | AddMovieSucess
  | AddMovieError
  | SyncMovie ;
