import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Movie } from './movie.model';
import { MovieActions, MovieActionTypes } from './movie.actions';
import { nsend } from 'q';
import { Update } from '@ngrx/entity';

export interface State extends EntityState<Movie> {
  // additional entities state properties
}

function sortByMovieID(e1: Movie, e2: Movie) {
  return e1.id - e2.id;
}

export function selectMovieId(m: Movie): string {
  return m.uuid;
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>(
  {
    selectId: selectMovieId,
    sortComparer: sortByMovieID
  }
);

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: MovieActions
): State {
  switch (action.type) {

    case MovieActionTypes.AddMovie: {
      return adapter.addOne(action.payload.movie, state);
    }

    case MovieActionTypes.UpsertMovie: {
      return adapter.upsertOne(action.payload.movie, state);
    }

    case MovieActionTypes.AddMovies: {
      return adapter.addMany(action.payload.movies, state);
    }

    case MovieActionTypes.UpsertMovies: {
      return adapter.upsertMany(action.payload.movies, state);
    }

    case MovieActionTypes.UpdateMovie: {
      const ns = adapter.updateOne(action.payload.movie, state);
      return ns;
    }

    case MovieActionTypes.UpdateMovies: {
      return adapter.updateMany(action.payload.movies, state);
    }

    case MovieActionTypes.DeleteMovie: {
      return adapter.removeOne(action.payload.id, state);
    }

    case MovieActionTypes.DeleteMovies: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case MovieActionTypes.LoadMovies: {
      return adapter.addAll(action.payload.movies, state);
    }

    case MovieActionTypes.ClearMovies: {
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
