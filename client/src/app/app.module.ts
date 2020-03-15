import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent} from './app.component';
import { AppService} from './app.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { DocumentListComponent } from './documentlist/documentlist.component';

import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StripesComponent } from './stripes/stripes.component';
import { StripesOverlayComponent } from './stripes-overlay/stripes-overlay.component';

import { StoreRouterConnectingModule, routerReducer, DefaultRouterStateSerializer } from '@ngrx/router-store';

import { AngularSplitModule } from 'angular-split';

// STORE
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';

import { MovieApiEffects } from './entities/movies-api.effects';

// MATERIAL
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// TASKS

import {TaskModule} from './task/task.module';

// Documents

import {DocumentModule} from './document/document.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    DocumentListComponent,
    MessagesComponent,
    DashboardComponent,
    StripesComponent,
    StripesOverlayComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    TaskModule,
    DocumentModule,
    AngularSplitModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([MovieApiEffects]),
    StoreRouterConnectingModule.forRoot({ serializer: DefaultRouterStateSerializer })
    ],

  exports: [ MatCheckboxModule, MatMenuModule, MatIconModule ],

  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
