import { createSelector } from '@ngrx/store';
import { Document} from './document.model';
import { AppState} from '../app-state/app-state';


export const selectDocumentContent = (state: AppState) => state.document.document.content;
export const selectDocumentSlectedMovie = (state: AppState) => state.document.document.selectedMovieUUID;
export const selectDocumentSlectedFrame = (state: AppState) => state.document.document.selectedFrame;
