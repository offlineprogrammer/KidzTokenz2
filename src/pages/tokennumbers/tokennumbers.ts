import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {
  DataServiceProvider
} from '../../providers/data-service/data-service';

/**
 * Generated class for the TokennumbersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokennumbers',
  templateUrl: 'tokennumbers.html',
})
export class TokennumbersPage {
  tokenNumbers: string;
  tokenNumbersArray: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,private dataService: DataServiceProvider) {
    this.tokenNumbers = navParams.get('tokenNumbers');
    this.tokenNumbersArray = this.fillArrayWithNumbers(10);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokennumbersPage');
  }

  fillArrayWithNumbers(n: number) {
    let nArray = [];
    nArray = Array.apply(null, Array(n));
    return nArray.map(function (x, i) {
      return 'assets/tokennumbers/' + (i + 1) + '.png';
    });
  }

  itemSelected(data: string): void {
    let ntokenNumbers = data.match(/\d+/);
    console.log(ntokenNumbers);
    console.log(ntokenNumbers[0]);
    this.viewCtrl.dismiss({ tokenNumbers: ntokenNumbers[0] });
  }

  dismiss() {
    let ntokenNumbers = this.tokenNumbers.match(/\d+/);
    this.viewCtrl.dismiss({ tokenNumbers: ntokenNumbers[0] });
  }

}
