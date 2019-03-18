import { Component, OnInit } from '@angular/core';


import { Store, select } from '@ngrx/store';
import { AppState } from '../../app-state/app-state';

import { selectAllTasks } from '../task.selectors';
import { selectAllMovies, selectMovie, selectMoviesEntities } from '../../entities/movie.selectors';



@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: any  = this.store.pipe(select(selectAllTasks));
  movies$ = this.store.pipe(select(selectMovie));

  displayedColumns: string[] = ['movieID', 'actionID', 'state', 'progress'];

  constructor( private  store: Store<AppState> ) { }

  ngOnInit() {
  //  this.tasks$.subscribe (v => console.log(v));
  }

}
