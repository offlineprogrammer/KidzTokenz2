import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Facebook } from '@ionic-native/facebook';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private userData: UserDataProvider, private loadingCtrl: LoadingController,private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  facebookLogin() {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.fb.login(['email']).then((response) => {

      console.log("logged in");




    }).catch((error) => { loader.dismiss(); console.log(error) });
  }

  contineAsGuest() {
    this.userData.setGuestUser(true);
   // this.gaService.setUserType(true);
   // this.navCtrl.push(HomePage, {});
    this.navCtrl.setRoot(HomePage, {});
  }

}
