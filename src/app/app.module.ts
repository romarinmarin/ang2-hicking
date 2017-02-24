import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HikeModule} from "./hike/hike.module";


import { AppComponent } from './app.component';
import {HikeService} from "./hike/hike.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HikeModule

  ],
  providers: [HikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
