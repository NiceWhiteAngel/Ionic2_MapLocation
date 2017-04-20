import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PlacesService } from '../../services/places.service';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
  providers: [Geolocation, PlacesService]
})
export class NewPlace {
location: {lat:number, lng:number}={lat:0 , lng:0};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation,
    private placesProvider: PlacesService
  ) {
  }

  onAddPlace(value: { title: string,location:{lat:number, lng:number} }) {
    this.placesProvider.addPlaces({title: value.title, location: this.location});
    this.navCtrl.pop();
  }

  onLocateUser() {
    //noinspection TypeScriptUnresolvedFunction
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      this.location.lat = resp.coords.latitude;
      this.location.lng = resp.coords.longitude;
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
    })
    .catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
