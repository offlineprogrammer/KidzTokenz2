import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokennumbersPage } from './tokennumbers';

@NgModule({
  declarations: [
    TokennumbersPage,
  ],
  imports: [
    IonicPageModule.forChild(TokennumbersPage),
  ],
})
export class TokennumbersPageModule {}
