import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectMonsterPage } from './select-monster';

@NgModule({
  declarations: [
    SelectMonsterPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectMonsterPage),
  ],
})
export class SelectMonsterPageModule {}
