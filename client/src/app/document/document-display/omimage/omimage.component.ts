import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Renderer2, ViewChild } from '@angular/core';

import { AppState } from '../../../app-state/app-state';
import { selectAllMovies, selectMovie, selectMoviesEntities } from '../../../entities/movie.selectors';

import {selectDocumentSelectedFrame, selectDocumentSelectedCE, selectDocumentSelectedCEpos, selectDocumentSelectedCEposDelta} from '../../document.selectors';

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
  @Input() ceuuid: string;

  showSummary: boolean;
  showCursor: boolean;
  compressOmImages: boolean;

  delta: number;
  cuerl: any;
  finfo: any;
  linfo: any;
  ainfos: any[];

  movies$ = this.store.pipe(select(selectMovie));
  selectedFrame = this.store.pipe (select(selectDocumentSelectedFrame));
  selectedCE = this.store.pipe (select(selectDocumentSelectedCE));
  selectedCEpos = this.store.pipe (select(selectDocumentSelectedCEpos));
  selectedCEposDelta = this.store.pipe (select(selectDocumentSelectedCEposDelta));

  //cursorShift = this.selectedCEposDelta.pipe(map( x => x * 100)).subscribe (x => console.log("delta=", x));

  selectedCElocal: string;
  selectedCEdeltaCursor: number;

  constructor(private renderer: Renderer2,
              public   store: Store<AppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {


 //   console.log ("NG INIT IN OM IMAGES")
    this.delta = this.e - this.s;

    this.showSummary = false;
    this.showCursor = false;

 //   this.selectedCEposDelta.subscribe (x => console.log(x));

    function pad(num: number, size: number): string {
      let s = num + '';
      while ( s.length < size ) { s = '0' + s; }
      return s;
      }

    this.ainfos = [];
    for (let  _i = 0; _i < this.n; _i++) {
        const luerl = 'static/cache/' +
        this.movieuuid + '/omi/'
              + pad (this.s, 8) + '_' +  pad (this.e, 8) + '/'
              + pad (_i, 8) + '.jpg';

        const sframenr = Math.round (this.s + this.delta *  (_i * 200) / this.n / 100.0);
        const eframenr = Math.round (this.s + this.delta *  ((_i+1) * 200) / this.n / 100.0);
        const ominfo = {s: sframenr, e: eframenr, url: luerl  };
        this.ainfos.push (ominfo);
    }
 

    this.cuerl = 'static/cache/' +
                 this.movieuuid + '/omi/' 
                 + pad (this.s, 8) + '_' +  pad (this.e, 8) + '/'
                 + pad (0, 8) + '.jpg';

    const cominfo = {cpos: -1, url: this.cuerl   };
    this.compressOmImages = false;
    if ( this.showSummary && (this.n > 2) ) {
      this.compressOmImages = true;
      this.finfo = this.ainfos[0];
      this.linfo = this.ainfos[this.n - 1];
    }

     // console.log (this.cuerl);
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

      //this.store.dispatch({ type: '[Document] Set Movie and Frame', payload: {movieuuid: this.movieuuid, fnr: framenr}} );
   }


  click(celem: string, i: number, e: MouseEvent) {
    const framenr = Math.round (this.s + this.delta *  (i * 200 + e.offsetX) / this.n / 100.0);
    const deltainframe =  e.offsetX / 100;
    this.store.dispatch({ type: '[Document] Set Movie and Frame',
                          payload: {movieuuid: this.movieuuid, fnr: framenr, ce: celem, cepos: i, ceposdelta: deltainframe}} );

    this.selectedCEdeltaCursor = e.offsetX-5;

    console.log('click : ', celem, i, deltainframe);
   }


}
