import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage'; // ionic storage
import {PlaceP} from '../model/place.model';
// inject storage
@Injectable()
export class PlacesService {
  private places: PlaceP[]=[];

  constructor (private storage:Storage){}

  addPlaces(place: PlaceP){
     this.places.push(place)
     // Acces to the storage
     this.storage.set('places', this.places);
      }

// retreive from the storage
  getPlaces(){
    var self = this;
    return this.storage.get('places')
    .then(
      (places)=> {
        this.places = places==null ? [] : places;

        return self.places.slice();
      }
    );

  }

  // retreive other places
    getOtherPlaces(){

    }

}
