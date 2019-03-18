import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Renderer, ViewChild } from '@angular/core';

import { AppState } from '../../../app-state/app-state';
import { selectAllMovies, selectMovie, selectMoviesEntities } from '../../../entities/movie.selectors';

import { Observable, of } from 'rxjs';
import { map, tap, take, mergeMap, catchError, finalize } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import * as d_actions from '../../document.actions';
import { Movie } from '../../../entities/movie.model';

@Component({
  selector: 'app-omimage',
  templateUrl: './omimage.component.html',
  styleUrls: ['./omimage.component.css']
})
export class OmImageComponent implements OnInit {

  @Input() s: number;
  @Input() e: number;
  @Input() n: number;
  @Input() movieuuid: string;

  showSummary: boolean;
  compressOmImages: boolean;

  delta: number;
  ceurl: string;
  fceurl: string;
  lceurl: string;
  ceurls: string[];
  movies$ = this.store.pipe(select(selectMovie));

  constructor(private renderer: Renderer,
              public   store: Store<AppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.delta = this.e - this.s;

    this.showSummary = false;

    function pad(num: number, size: number): string {
      let s = num + '';
      while ( s.length < size ) { s = '0' + s; }
      return s;
      }
    this.ceurls = [];
    for (let  _i = 0; _i < this.n; _i++) {
        const luerl = 'static/cache/' +
        this.movieuuid + '/omi/'
              + pad (this.s, 8) + '_' +  pad (this.e, 8) + '/'
              + pad (_i, 8) + '.jpg';
        this.ceurls.push (luerl);
    }

    this.ceurl = 'static/cache/' +
                 this.movieuuid + '/omi/' 
                 + pad (this.s, 8) + '_' +  pad (this.e, 8) + '/'
                 + pad (0, 8) + '.jpg';

    this.compressOmImages = false;
    if ( this.showSummary && (this.n > 2) ) {
      this.compressOmImages = true;
      this.fceurl = this.ceurls[0];
      this.lceurl = this.ceurls[this.n - 1];
    }

    // console.log (this.ceurl);
    // console.log (this.subomis);
  }


  mouseEnter(div: string) {
    console.log('mouse enter : ' + div);
  }

  mouseLeave(div: string) {
   console.log('mouse leave :' + div);
  }
  mouseMove(i: number, e: MouseEvent) {
    const framenr = Math.round (this.s + this.delta *  (i * 200 + e.offsetX) / this.n / 100.0);

    this.store.pipe(
      take(1),
      select(selectMovie),
      map( f => f (this.movieuuid))
      ).subscribe(m => console.log (m.name, Math.round(framenr) ));

      this.store.dispatch({ type: '[Document] Set Movie and Frame', payload: {movieuuid: this.movieuuid, fnr: framenr}} );
   }


  click(i: number, e: MouseEvent) {
    const framenr = Math.round (this.s + this.delta *  (i * 200 + e.offsetX) / this.n / 100.0);
    this.store.dispatch({ type: '[Document] Set Movie and Frame', payload: {movieuuid: this.movieuuid, fnr: framenr}} );
    console.log('click :' + framenr);
   }


}
