import { Component } from '@angular/core';
import { ModalController,NavController } from 'ionic-angular';
import {Place} from "../place/place";
import {NewPlace} from "../new-place/new-place";
import {PlacesService} from '../../services/places.service';
import {PlaceP} from '../../model/place.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PlacesService]
})
export class HomePage {
places: {title: string}[]=[];

  constructor(public navCtrl: NavController,
              private placesService: PlacesService,
              public modalCtrl: ModalController) {

  }
//Runs when the page is about to enter and become the active page.
ionViewWillEnter(){
  //noinspection TypeScriptUnresolvedFunction
  this.placesService.getPlaces()
  .then(
    (places) => this.places = places
  );
}
  onLoadNewPlace(){
    this.navCtrl.push(NewPlace);
  }

  onOpenPlace(placy: PlaceP){
    console.log('kalb')
    console.log(placy)
    let modal = this.modalCtrl.create(Place,placy);
    modal.present();
  }


}
