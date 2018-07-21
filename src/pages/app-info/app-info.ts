import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the AppInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-info',
  templateUrl: 'app-info.html',
})
export class AppInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppInfoPage');
  }

  close() {
    this.viewController.dismiss();
  }

}
