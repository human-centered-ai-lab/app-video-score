import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable, Subject, of } from 'rxjs';


import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { AppState } from './app-state/app-state';

import * as MovieActions from './entities/movie.actions';
import * as MovieAPIActions from './entities/movies-api.actions';
import * as TasksAPIActions from './task/task-api.actions';


import { Movie, MovieState } from './entities/movie.model';


import { SyncstoreService } from './syncstore.service';
import { SseService } from './sse.service';


@Injectable()
export class AppService {

  myData: any;

  constructor(private  http: HttpClient,
              private  syncstore: SyncstoreService,
              public   store: Store<AppState>) {
  }

  initStore() {
    console.log ('in the APP SERVICE class');
    this.store.dispatch(new MovieAPIActions.LoadMovies ());
    this.store.dispatch(new TasksAPIActions.LoadTasks ());
  //  this.store.subscribe (v => console.log(v));
    return this.http.get('/api/ping');
  }

 
}
