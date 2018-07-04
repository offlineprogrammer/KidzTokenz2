import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidInfoPage } from './kid-info';

@NgModule({
  declarations: [
    KidInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(KidInfoPage),
  ],
})
export class KidInfoPageModule {}
