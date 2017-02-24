import {Component, OnInit} from '@angular/core';
import {Hike} from './shared/hike';
import {HikeService} from "./hike/hike.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'an hicking app !';
  hikes:Hike[];

  constructor(private _hikeService:HikeService) {

  }

  ngOnInit() {

    this.hikes = this._hikeService.getHikes()
  }


}
