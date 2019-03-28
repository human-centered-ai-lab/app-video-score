import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromDocument from './document.state';
import { DocumentApiEffects } from './document-api.effects';

import { DocumentDisplayComponent } from './document-display/document-display.component';
import { ContentElementComponent } from './document-display/contentelement/contentelement.component';
import { OmImageComponent } from './document-display/omimage/omimage.component';

import { AngularSplitModule } from 'angular-split';

// VIDEO PLAYER
import {VgCoreModule} from 'videogular2/core';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';


// MATERIAL
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';

// TASKS
@NgModule({
  declarations: [
  DocumentDisplayComponent,
  ContentElementComponent,
  OmImageComponent],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    VgCoreModule,
    VgCoreModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AngularSplitModule.forRoot(),
    StoreModule.forFeature('document', fromDocument.documentreducers),
    EffectsModule.forFeature([DocumentApiEffects])
    ],

    exports: [ MatTableModule],
})


export class DocumentModule {
}
