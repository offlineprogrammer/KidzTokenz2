import { Component } from '@angular/core';
import { NavController, ModalController,LoadingController } from 'ionic-angular';
import { AddKidPage } from '../add-kid/add-kid';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private modalController: ModalController,
    private loadingCtrl: LoadingController) {

  }

  addNewKid(): void {
    let modal = this.modalController.create(AddKidPage);
    modal.onDidDismiss(data => {
      let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loader.present();
      // this.dataService.getKids()
      //   .then((response) => {
      //     this.kids = response;
      //     loader.dismiss()
      //   });
    });
    modal.present();
  }

}
