import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildInfoPage } from './child-info';

@NgModule({
  declarations: [
    ChildInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildInfoPage),
  ],
})
export class ChildInfoPageModule {}
