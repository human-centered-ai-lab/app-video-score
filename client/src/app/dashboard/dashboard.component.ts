import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { MovieService } from '../movie.service';
import { Movie } from '../entities/movie.model';
import { selectAllMovies } from '../entities/movie.selectors';
import { AppState } from '../app-state/app-state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  movies$: Observable<Movie[]> = this.store.pipe(select(selectAllMovies))

  constructor(private movieService: MovieService, 
              public   store: Store<AppState> ) { }

  ngOnInit() {
  }


}
