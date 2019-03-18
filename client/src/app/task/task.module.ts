import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromTask from './task.state';
import { TaskApiEffects } from './task-api.effects';
import { TaskListComponent } from './task-list/task-list.component';

// MATERIAL
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';

// TASKS
@NgModule({
  declarations: [
  TaskListComponent],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    EffectsModule.forFeature([TaskApiEffects]),
    StoreModule.forFeature('task', fromTask.taskreducers)
    ],

    exports: [ MatTableModule ],
})


export class TaskModule {
}
