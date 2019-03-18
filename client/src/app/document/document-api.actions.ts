import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Document } from './document.model';


export enum DocumentAPIActionTypes {
  LoadDocument       = '[Document API] Load Document',
  LoadDocumentSucess = '[Document API] Load Document Success',
  LoadDocumentError  = '[Document API] Load Document Error',
  SyncDocument       = '[Document API] Sync Document'
}

export class LoadDocument implements Action {
  readonly type = DocumentAPIActionTypes.LoadDocument;
  constructor(public payload: { id: number }) {}
}

export class LoadDocumentSucess implements Action {
  readonly type = DocumentAPIActionTypes.LoadDocumentSucess;
}

export class LoadDocumentError implements Action {
  readonly type = DocumentAPIActionTypes.LoadDocumentError;
}

export class SyncDocument implements Action {
  readonly type = DocumentAPIActionTypes.SyncDocument;
  constructor(public payload: { document: Update<Document> }) {}
}

export type DocumentAPIActions =
LoadDocument
  | LoadDocumentSucess
  | LoadDocumentError
  | SyncDocument ;
