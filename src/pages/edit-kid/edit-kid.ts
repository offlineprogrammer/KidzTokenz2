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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditKidPage');
  }

}
