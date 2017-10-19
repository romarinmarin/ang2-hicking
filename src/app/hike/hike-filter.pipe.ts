import { Hike } from './../shared/hike';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hikeFilter'
})
export class HikeFilterPipe implements PipeTransform {



  transform(value:Hike[], searchTerm:string = '') {
    if (searchTerm !== ''){
      let result = value.filter((hike : Hike) => hike.description.toLowerCase().includes(searchTerm)
      || hike.name.toLowerCase().includes(searchTerm));
      return result;

    } else {
      return value;
    }
  }

}

