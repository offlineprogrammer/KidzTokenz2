import {
  Component
} from '@angular/core';
import {
  NavController,
  ModalController,
  LoadingController
} from 'ionic-angular';
import {
  AddKidPage
} from '../add-kid/add-kid';
import {
  AddPointsPage
} from '../add-points/add-points';
import {
  ChildInfoPage
} from '../child-info/child-info';
import {
  DataServiceProvider
} from '../../providers/data-service/data-service';
import {
  Kid
} from '../../models/kid';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  kids: Kid[] = [];
  constructor(public navCtrl: NavController,
    private modalController: ModalController,
    private loadingCtrl: LoadingController,
    private dataService: DataServiceProvider) {

    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.dataService.getKids()
      .then((response) => {
        this.kids = response;
        loader.dismiss()
      });

  }

  itemSelected(data: Kid): void {
    this.navCtrl.push(ChildInfoPage, {
      kid: data
    });
   
  }

  addNewKid(): void {
    let modal = this.modalController.create(AddKidPage);
    modal.onDidDismiss(data => {
      let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loader.present();
       this.dataService.getKids()
         .then((response) => {
           this.kids = response;
      loader.dismiss()
         });
    });
    modal.present();
  }

}
