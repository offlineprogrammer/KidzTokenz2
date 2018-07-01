import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  ViewController,
  NavParams,
  LoadingController,
  ModalController
} from 'ionic-angular';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {
  DataServiceProvider
} from '../../providers/data-service/data-service';
import {
  Kid
} from '../../models/kid';
import {
  SelectMonsterPage
} from '../select-monster/select-monster';

import {
  TokentypePage
} from '../tokentype/tokentype';

/**
 * Generated class for the AddKidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-kid',
  templateUrl: 'add-kid.html',
})
export class AddKidPage {
  addKidForm: FormGroup;
  kidMonster: string = 'assets/monsters/1.png';
  tokenType: string = 'assets/tokentypes/star.png';
  constructor(public navCtrl: NavController,
    private viewController: ViewController,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private dataService: DataServiceProvider) {

    this.addKidForm = this.formBuilder.group({
      kidName: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddKidPage');
  }

  selectMonster() {
    let modal = this.modalController.create(SelectMonsterPage, {
      selectedMonster: this.kidMonster
    });
    modal.onDidDismiss(data => {
      this.kidMonster = data.selectedToken;
    });
    modal.present();
  }

  selectToken() {
    let modal = this.modalController.create(TokentypePage, { selectedToken: this.tokenType });
    modal.onDidDismiss(data => {
      this.tokenType = data.selectedToken;
    });
    modal.present();
  }

  close() {
    this.viewController.dismiss();
  }

  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }


  processForm() {
    let newkid: Kid;
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    newkid = {
      kidId: this.generateUUID(),
      name: this.addKidForm.value.kidName,
      isActive: true,
      kidMonster: this.kidMonster,
      positives: 0,
      negatives: 0,
      tokenType: '',
      negativetokenType: '',
      tokenNumbers: 0,
      srcTokenNumbers: '',
      tasksCount: 0,
      kidPhoto: '',
      tasks: []
    };
    if (this.addKidForm.status === 'VALID') {
      this.dataService.createKid(newkid)
        .then(() => {
          /*       this.dataService.updateKids();*/
          //this.trackEvent('Child', 'AddChild', newkid.tokenType, newkid.tokenNumbers);
          console.log("done");
          loader.dismiss();
          this.close();
        });
    };
  }


}
