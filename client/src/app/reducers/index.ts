import { ActionReducerMap } from '@ngrx/store';

import * as MovieReducers from '../entities/movie.reducer';
import * as MovieAPIReducers from '../entities/movies-api.reducer';

export const reducers: ActionReducerMap<any> = {
    movies:   MovieReducers.reducer,
    movieapi: MovieAPIReducers.reducer
};
