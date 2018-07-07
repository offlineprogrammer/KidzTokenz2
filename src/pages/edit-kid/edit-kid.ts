import { Component } from '@angular/core';
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
  FormGroup,
  Validators
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

import {
  TokennumbersPage
} from '../tokennumbers/tokennumbers';


/**
 * Generated class for the EditKidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-kid',
  templateUrl: 'edit-kid.html',
})
export class EditKidPage {
  editKidForm: FormGroup;
  oKid: Kid;
  constructor(public navCtrl: NavController,
    private viewController: ViewController,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private dataService: DataServiceProvider) {
      this.oKid = navParams.get('kid');
      this.editKidForm = this.formBuilder.group({
        kidName: [this.oKid.name, [Validators.required, Validators.minLength(2)]],
        kidMonster: [this.oKid.kidMonster, [Validators.required, Validators.minLength(2)]],
        tokenType: [this.oKid.tokenType, [Validators.required, Validators.minLength(2)]],
        tokenNumbers: [this.oKid.tokenNumbers, [Validators.required]],
        srcTokenNumbers:[this.oKid.srcTokenNumbers],
      });
  }

  selectMonster() {
    let modal = this.modalController.create(SelectMonsterPage, {
      selectedMonster: this.oKid.kidMonster
    });
    modal.onDidDismiss(data => {
      console.log('itemSelectedvv: ', data);
      //this.kidMonster = data.selectedMonster;
      this.editKidForm.controls["kidMonster"].setValue(data.selectedMonster);
      console.log('this.kidMonster: ',this.editKidForm.controls["kidMonster"].value);
    });
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditKidPage');
  }

  processForm() {
    /* let oKid = this.editKidForm.value;
    let bValidKid = this.editKidForm.valid;

    console.log('editKidForm: ', oKid);
    console.log('valid: ', oKid.kidId); */
    this.oKid.name = this.editKidForm.controls["kidName"].value;
    this.oKid.kidMonster = this.editKidForm.controls["kidMonster"].value;
    this.dataService.updateKids()
    .then(() => { });
  }



}
