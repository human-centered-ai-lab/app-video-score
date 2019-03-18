import { EntityState } from '@ngrx/entity';

export interface Movie {
  id: number;
  uuid: string;
  name: string;
  source: string;
  uri: string;
  height: number;
  width:  number;
  stripeStatus: number;
  cutStatus: number;
  docStatus: number;
}

export interface MovieState extends EntityState<Movie> {}
