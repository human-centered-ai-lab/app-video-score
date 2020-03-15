import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// VIDEO PLAYER
import { YouTubePlayerModule } from '@angular/youtube-player';


import * as fromDocument from './document.state';
import { DocumentApiEffects } from './document-api.effects';

import { DocumentDisplayComponent } from './document-display/document-display.component';
import { ContentElementComponent } from './document-display/contentelement/contentelement.component';
import { OmImageComponent } from './document-display/omimage/omimage.component';

import { AngularSplitModule } from 'angular-split';


// MATERIAL
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';

// TASKS
@NgModule({

  imports: [
    CommonModule,
    YouTubePlayerModule,
    MatTableModule,
    RouterModule,
    AngularSplitModule.forRoot(),
    StoreModule.forFeature('document', fromDocument.documentreducers),
    EffectsModule.forFeature([DocumentApiEffects])
    ],
    declarations: [
      DocumentDisplayComponent,
      ContentElementComponent,
      OmImageComponent],
    
    exports: [ MatTableModule],
})


export class DocumentModule {
}
