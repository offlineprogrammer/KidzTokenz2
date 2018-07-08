import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  ModalController,
  NavParams,
} from 'ionic-angular';
import {
  Kid
} from '../../models/kid';
import {
  DataServiceProvider
} from '../../providers/data-service/data-service';
import {
  TokennumbersPage
} from '../tokennumbers/tokennumbers';

import {
  TokentypePage
} from '../tokentype/tokentype';

import { EditKidPage } from '../edit-kid/edit-kid';

/**
 * Generated class for the KidInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kid-info',
  templateUrl: 'kid-info.html',
})
export class KidInfoPage {
  oKid: Kid;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataServiceProvider, private modalController: ModalController, ) {
    this.oKid = navParams.get('kid');
    console.log(this.oKid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KidInfoPage');
  }

  deleteKid(data: Kid): void {

    this.dataService.deleteKid(data)
      .then(() => {
        //  this.trackEvent('ChildInfo', 'deleteChild', '', 0);
        //  this.events.publish('child:deleted');
        this.navCtrl.pop();
      });
  }

  


  editKid(data: Kid): void {

    this.navCtrl.push(EditKidPage, {
      kid: data
    });
  }

  changeTokenNumbers(): void {
    let modal = this.modalController.create(TokennumbersPage, { tokenNumbers: this.oKid.srcTokenNumbers });
    modal.onDidDismiss(data => {
      this.oKid.tokenNumbers = data.tokenNumbers;
      this.oKid.srcTokenNumbers = 'assets/tokennumbers/' + this.oKid.tokenNumbers + '.png';
      this.updateData();
      //this.trackEvent('ChildInfo', 'changeTokenNumbers', this.oKid.srcTokenNumbers, 0);
    });
    modal.present();
  }

  changeToken(): void {
    let modal = this.modalController.create(TokentypePage, { selectedToken: this.oKid.tokenType });
    modal.onDidDismiss(data => {
      this.oKid.tokenType = data.selectedToken;
      this.oKid.negativetokenType = data.selectedToken.replace('assets/images/', 'assets/images/bad-');
      this.updateData();
   //   this.trackEvent('ChildInfo', 'changeToken', this.oKid.tokenType, 0);
    });
    modal.present();
  }

  private updateData(): void {
    this.oKid.srcTokenNumbers = 'assets/tokennumbers/' + this.oKid.tokenNumbers + '.png',
      this.dataService.updateKids()
        .then(() => { });
  }

}
