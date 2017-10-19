import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HikeListComponent } from './hike-list.component';
import { HikeDetailsComponent } from './hike-details.component';
import {RouterModule} from "@angular/router";
import { HikeFilterPipe } from './hike-filter.pipe';


@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [HikeListComponent, HikeDetailsComponent, HikeFilterPipe]
})
export class HikeModule { }
