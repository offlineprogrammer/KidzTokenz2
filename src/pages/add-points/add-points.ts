import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  Kid
} from '../../models/kid';
import {
  DataServiceProvider
} from '../../providers/data-service/data-service';

/**
 * Generated class for the AddPointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-points',
  templateUrl: 'add-points.html',
})
export class AddPointsPage {
  oKid: Kid
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataService: DataServiceProvider) {
    this.oKid = navParams.get('kid');
    console.log(this.oKid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPointsPage');
  }

  addPositives(): void {
    console.log(this.oKid.positives);
    
    this.oKid.positives++;
    console.log(this.oKid.positives);
  }

  addNegatives(): void {
    this.oKid.negatives++;
  }

  deleteKid(data: Kid): void {

    this.dataService.deleteKid(data)
      .then(() => {
        // this.trackEvent('ChildInfo', 'deleteChild', '', 0);
        // this.events.publish('child:deleted');
        this.navCtrl.pop();
      });
  }


}
