import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPointsPage } from './add-points';

@NgModule({
  declarations: [
    AddPointsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPointsPage),
  ],
})
export class AddPointsPageModule {}
