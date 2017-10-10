import { HikeService } from './hike.service';
import {Component, OnInit} from '@angular/core';
import {Hike} from "../shared/hike";

@Component({
  moduleId: module.id,
  selector: 'hike-list',
  templateUrl: './hike-list.component.html',
  styleUrls: ['./hike-list.component.css']
})
export class HikeListComponent implements OnInit {
  hikes:Hike[];

  constructor(  private _hikeService:HikeService) {
  }

  ngOnInit() {


    this._hikeService.getHikesFrom()
    .subscribe(
        res => this.hikes = res,
        err => console.error(err.status));


  }

}
