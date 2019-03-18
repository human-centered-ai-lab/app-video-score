import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Document } from './document.model';
import { Movie } from '../entities/movie.model';
import { FnParam } from '@angular/compiler/src/output/output_ast';

export enum DocumentActionTypes {
  LoadDocument  = '[Document] Load Document',
  ClearDocument = '[Document] Clear Document',
  SetSelectedMovieAndFrame = '[Document] Set Movie and Frame',

}

export class LoadDocument implements Action {
  readonly type = DocumentActionTypes.LoadDocument;
  constructor(public payload: { document: Document }) {}
}

export class ClearDocument implements Action {
  readonly type = DocumentActionTypes.ClearDocument;

}

export class SetSelectedMovieAndFrame implements Action {
  readonly type = DocumentActionTypes.SetSelectedMovieAndFrame;
  constructor(public payload: { movieuuid: string, fnr: number }) {}
}


export type DocumentActions =
  LoadDocument |
  ClearDocument |
  SetSelectedMovieAndFrame;
