import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {
  DataServiceProvider
} from '../../providers/data-service/data-service';

/**
 * Generated class for the TokentypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokentype',
  templateUrl: 'tokentype.html',
})
export class TokentypePage {
  selectedToken: string;
  tokenTypes: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController, 
  private dataService: DataServiceProvider) {
    this.selectedToken = navParams.get('selectedToken');
    this.tokenTypes = dataService.getTokenTypes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokentypePage');
  }

  itemSelected(data: string): void {

    this.viewCtrl.dismiss({ selectedToken: data });


  }

  dismiss() {
    this.viewCtrl.dismiss({ selectedToken: this.selectedToken });
  }

}
