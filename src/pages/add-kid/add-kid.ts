import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  ViewController,
  NavParams,
  LoadingController
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
  tokenType: string = 'assets/images/star.png';
  srcTokenNumbers: string = 'assets/images/5.png';
  tokenNumbers: number = 5;
  base64Image: string;
  kidPicture: any;
  constructor(public navCtrl: NavController,
    private viewController: ViewController,
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
      kidPhoto: '',
      positives:7,
      negatives:2
    };
    if (this.addKidForm.status === 'VALID') {
      this.dataService.createKid(newkid, this.kidPicture)
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
