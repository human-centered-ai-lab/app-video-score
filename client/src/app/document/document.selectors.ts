import { createSelector } from '@ngrx/store';
import { Document} from './document.model';
import { AppState} from '../app-state/app-state';


export const selectDocumentContent = (state: AppState) => state.document.document.content;
export const selectDocumentSelectedMovie = (state: AppState) => state.document.document.selectedMovieUUID;
export const selectDocumentSelectedFrame = (state: AppState) => state.document.document.selectedFrame;
export const selectDocumentSelectedCE = (state: AppState) => state.document.document.selectedCE;
export const selectDocumentSelectedCEpos = (state: AppState) => state.document.document.selectedCEpos;
export const selectDocumentSelectedCEposDelta = (state: AppState) => state.document.document.selectedCEposDelta;
