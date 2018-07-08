import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  ModalController,
  NavParams,AlertController,LoadingController
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
import { AddTaskPage } from '../add-task/add-task';

import { EditKidPage } from '../edit-kid/edit-kid';
import { TaskInfoPage } from '../task-info/task-info';
import { Task } from '../../models/task';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataServiceProvider, 
    private modalController: ModalController,private alertCtrl: AlertController, private loadingCtrl: LoadingController ) {
    this.oKid = navParams.get('kid');
    console.log(this.oKid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KidInfoPage');
  }




  deleteKid(data: Kid): void {
 let alert = this.alertCtrl.create({
    title: 'Confirm Deletion',
    message: 'Are you sure you want to permanently remove this?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Yes clicked');
          this.dataService.deleteKid(data)
          .then(() => {
            //  this.trackEvent('ChildInfo', 'deleteChild', '', 0);
            //  this.events.publish('child:deleted');
            this.navCtrl.pop();
          });
        }
      }
    ]
  });
  alert.present();


  }

  
  itemSelected(data: Task): void {

    this.navCtrl.push(TaskInfoPage, {
      task: data
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

  addNewTask(data: any): void {
    let modal = this.modalController.create(AddTaskPage, { 'kid': this.oKid });
    modal.onDidDismiss(data => {
      let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loader.present();
      setTimeout(() => {
        loader.dismiss();
      }, 2000);

    });
    modal.present();

  }

}
