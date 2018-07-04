import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  Kid
} from '../../models/kid';
import {
  DataServiceProvider
} from '../../providers/data-service/data-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oKid = navParams.get('kid');
    console.log(this.oKid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KidInfoPage');
  }

}
