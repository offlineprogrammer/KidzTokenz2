import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserDataProvider } from '../../providers/user-data/user-data';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private userData: UserDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  contineAsGuest() {
    this.userData.setGuestUser(true);
   // this.gaService.setUserType(true);
   // this.navCtrl.push(HomePage, {});
    this.navCtrl.setRoot(HomePage, {});
  }

}
