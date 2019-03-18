import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DocumentActionTypes } from './document.actions';

@Injectable()
export class DocumentEffects {

  constructor(private actions$: Actions) {}
}
