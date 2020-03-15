import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Renderer2, ViewChild } from '@angular/core'

import { Observable, of } from 'rxjs';
import { map, tap, take, mergeMap, catchError, finalize } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-contentelement',
  templateUrl: './contentelement.component.html',
  styleUrls: ['./contentelement.component.css']
})


export class ContentElementComponent implements OnInit {

  @Input() id: string;
  @Input() payload: any;

  ceurl: string;

  n: number;

  constructor(private renderer: Renderer2,
              private route: ActivatedRoute) { }

  ngOnInit() {

    // console.log (this.ceurl);
    // console.log (this.subomis);
  }
}
