import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NewPlace } from 'new-place';

@NgModule({
  declarations: [
    NewPlace,
  ],
  imports: [
    IonicModule. forRoot(NewPlace),
  ],
  exports: [
    NewPlace
  ]
})
export class NewPlaceModule {}
