import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Cut } from './cut.model';
import { CutActions, CutActionTypes } from './cut.actions';

export interface State extends EntityState<Cut> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Cut> = createEntityAdapter<Cut>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: CutActions
): State {
  switch (action.type) {
    case CutActionTypes.AddCut: {
      return adapter.addOne(action.payload.cut, state);
    }

    case CutActionTypes.UpsertCut: {
      return adapter.upsertOne(action.payload.cut, state);
    }

    case CutActionTypes.AddCuts: {
      return adapter.addMany(action.payload.cuts, state);
    }

    case CutActionTypes.UpsertCuts: {
      return adapter.upsertMany(action.payload.cuts, state);
    }

    case CutActionTypes.UpdateCut: {
      return adapter.updateOne(action.payload.cut, state);
    }

    case CutActionTypes.UpdateCuts: {
      return adapter.updateMany(action.payload.cuts, state);
    }

    case CutActionTypes.DeleteCut: {
      return adapter.removeOne(action.payload.id, state);
    }

    case CutActionTypes.DeleteCuts: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case CutActionTypes.LoadCuts: {
      return adapter.addAll(action.payload.cuts, state);
    }

    case CutActionTypes.ClearCuts: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
