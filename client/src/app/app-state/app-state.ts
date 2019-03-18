import { NgModule,  OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap } from '@ngrx/store';


import * as fMovieReducer from '../entities/movie.reducer';
import * as fMovieApiReducer from '../entities/movies-api.reducer';
import * as fDocumentApiReducer from '../document/document-api.reducer';


export class AppStateModule implements OnInit  {

  ngOnInit() {
      console.log ('AppStateModule');
  }

}

export interface AppState {
  task: any;
  document: any;
  movies: fMovieReducer.State;
  movieapi: fMovieApiReducer.State;
}

export const reducers: ActionReducerMap<any> = {
  movies:   fMovieReducer.reducer,
  movieapi: fMovieApiReducer.reducer,
  documentapi: fDocumentApiReducer.reducer
};


