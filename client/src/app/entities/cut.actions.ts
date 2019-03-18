import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Cut } from './cut.model';

export enum CutActionTypes {
  LoadCuts   = '[Cut] Load Cuts',
  AddCut     = '[Cut] Add Cut',
  UpsertCut  = '[Cut] Upsert Cut',
  AddCuts    = '[Cut] Add Cuts',
  UpsertCuts = '[Cut] Upsert Cuts',
  UpdateCut  = '[Cut] Update Cut',
  UpdateCuts = '[Cut] Update Cuts',
  DeleteCut  = '[Cut] Delete Cut',
  DeleteCuts = '[Cut] Delete Cuts',
  ClearCuts  = '[Cut] Clear Cuts'
}

export class LoadCuts implements Action {
  readonly type = CutActionTypes.LoadCuts;

  constructor(public payload: { cuts: Cut[] }) {}
}

export class AddCut implements Action {
  readonly type = CutActionTypes.AddCut;

  constructor(public payload: { cut: Cut }) {}
}

export class UpsertCut implements Action {
  readonly type = CutActionTypes.UpsertCut;

  constructor(public payload: { cut: Cut }) {}
}

export class AddCuts implements Action {
  readonly type = CutActionTypes.AddCuts;

  constructor(public payload: { cuts: Cut[] }) {}
}

export class UpsertCuts implements Action {
  readonly type = CutActionTypes.UpsertCuts;

  constructor(public payload: { cuts: Cut[] }) {}
}

export class UpdateCut implements Action {
  readonly type = CutActionTypes.UpdateCut;

  constructor(public payload: { cut: Update<Cut> }) {}
}

export class UpdateCuts implements Action {
  readonly type = CutActionTypes.UpdateCuts;

  constructor(public payload: { cuts: Update<Cut>[] }) {}
}

export class DeleteCut implements Action {
  readonly type = CutActionTypes.DeleteCut;

  constructor(public payload: { id: string }) {}
}

export class DeleteCuts implements Action {
  readonly type = CutActionTypes.DeleteCuts;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearCuts implements Action {
  readonly type = CutActionTypes.ClearCuts;
}

export type CutActions =
 LoadCuts
 | AddCut
 | UpsertCut
 | AddCuts
 | UpsertCuts
 | UpdateCut
 | UpdateCuts
 | DeleteCut
 | DeleteCuts
 | ClearCuts;
