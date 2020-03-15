import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { filter, map, tap, take, mergeMap, catchError, finalize } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../app-state/app-state';


import { selectDocumentContent, selectDocumentSelectedMovie, selectDocumentSelectedFrame } from '../document.selectors';
import { selectAllMovies, selectMovie, selectMoviesEntities } from '../../entities/movie.selectors';


export interface OMImagePayload {
  movieuuid: string;
  s: number;
  e: number;
}

export interface ContentElement {
  id: string;
  payload: OMImagePayload;
}

@Component({
  selector: 'app-document-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './document-display.component.html',
  styleUrls: ['./document-display.component.css']
})
export class DocumentDisplayComponent implements OnInit {


  @ViewChild('player') player: any;
  videoId: string;


  movies$ = this.store.pipe(select(selectMovie));
  selectedMovie = this.store.pipe (select(selectDocumentSelectedMovie));
  selectedFrame = this.store.pipe (select(selectDocumentSelectedFrame));
  
  id: number;
  content: any  = this.store.pipe(select(selectDocumentContent));

  co:      Observable<Array<any>>;
  pa:      Observable<Array<any>>;
  index:   Observable<Array<any>>;
  direction = 'horizontal';

  omimages: Observable<ContentElement[]>;

  constructor( private  store: Store<AppState>,
               private  route: ActivatedRoute,
               private  router: Router ) { }

  ngOnInit() {

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);


    this.id = parseInt( this.route.snapshot.paramMap.get('id'), 10);

    console.log('Load Document', this.id);
    this.store.dispatch({ type: '[Document] Clear Document' } );
    this.store.dispatch({ type: '[Document API] Load Document', payload: {id: this.id} } );

    abstract class Dictionary<T>  {
      [id: string]: T;
    }

    function reorder (ids: string[], entities: Dictionary<string>): any {
        return   ids.map((id: any) => (entities as any)[id]);
    }

    function makeCE (input: any): ContentElement[] {
      const ces: ContentElement[] = [];
      console.log ('START GENERATE CE');
      for (const i of input) {
        const ce: ContentElement = {id : i.id, payload: JSON.parse (i.payload)};
        ces.push (ce);
      }
      console.log ('FINISH GENERATE CE');
      return ces;
  }
    // Object.assign({}, state, {pending: true, error: null});

    // TODO, check why v['content_element_index'] has to be eval-ed
    this.co = this.content.pipe (
       filter (v => v !== null),
       map  (v => {  if (v == null) {return null; }
                    console.log ('START REORDER');
                    const ce = reorder ( eval(v['content_element_index']), v['content_elements']);
                    console.log ('FINISH REORDER');
                    return ce;
             }),
       map (v => makeCE(v))
     );

    this.index = this.content.pipe (
      filter (v => v !== null),
      map  (v => eval( v['content_element_index']))
    );

// <app-omsubimage  [startFN]="ce.startFN" [endFN]="somi.endFN" [centerFN]="ce.centerFN"></app-omsubimage>
//   this.co.subscribe (v => console.log(v));
  }


  mouseEnter(div: string) {
    console.log('mouse enter : ' + div);
  }

  mouseLeave(div: string) {
   console.log('mouse leave :' + div);
  }


}
