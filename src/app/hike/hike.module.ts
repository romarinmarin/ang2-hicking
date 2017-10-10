import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HikeListComponent } from './hike-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HikeListComponent]
})
export class HikeModule { }
