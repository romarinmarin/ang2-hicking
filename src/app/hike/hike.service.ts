import {Injectable} from '@angular/core';
import {Hike} from "../shared/hike";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HikeService {

  constructor(private _http: Http) {

  }

  getHikesFrom() {
            return this._http.get('../assets/hikes.json')
                .do(x => console.log(x))
                .map(res => res.json());
        }



}
