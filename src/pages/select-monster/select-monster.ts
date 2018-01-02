import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';
import {
  DataServiceProvider
} from '../../providers/data-service/data-service';

/**
 * Generated class for the SelectMonsterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-monster',
  templateUrl: 'select-monster.html',
})
export class SelectMonsterPage {
  selectedMonster: string;
  kidMonstors: string[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private dataService: DataServiceProvider) {
    this.selectedMonster = navParams.get('selectedMonster');
    this.kidMonstors = dataService.getMonsters();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectMonsterPage');
  }


  itemSelected(data: string): void {

    this.viewCtrl.dismiss({
      selectedToken: data
    });


  }

  dismiss() {
    this.viewCtrl.dismiss({
      selectedToken: this.selectedMonster
    });
  }

}
