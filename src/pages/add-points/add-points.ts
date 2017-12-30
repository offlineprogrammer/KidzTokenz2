import {
  Component,
  ViewChild
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  Kid
} from '../../models/kid';
import {
  DataServiceProvider
} from '../../providers/data-service/data-service';
import {
  Chart
} from 'chart.js';

/**
 * Generated class for the AddPointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-points',
  templateUrl: 'add-points.html',
})
export class AddPointsPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  oKid: Kid
  percentage: number;
  doughnutChart: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataServiceProvider) {
    this.oKid = navParams.get('kid');
    console.log(this.oKid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPointsPage');
    this.calculatePercentage();
  }

  addPositives(): void {
    console.log(this.oKid.positives);

    this.oKid.positives++;
    console.log(this.oKid.positives);
    this.calculatePercentage();
  }


  calculatePercentage() {
    console.log(this.oKid.positives);
    this.percentage = Math.round(100 - ((this.oKid.negatives / this.oKid.positives) * 100));


    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: [this.percentage + "% Positive"],
        datasets: [{
          data: [this.percentage, (100 - this.percentage)],
          backgroundColor: [
            'rgba(0, 255, 0, 1)',
            'rgba(0, 0, 0, 0)'
          ]
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        title: {
          display: true,
          text: this.percentage + "% Positive",
          fontStyle: 'bold',
          fontSize: 18
      }
      },

    });

    //this.oKid.positives++;
    console.log(this.percentage);
  }


  addNegatives(): void {
    this.oKid.negatives++;
    this.calculatePercentage();
  }

  deleteKid(data: Kid): void {

    this.dataService.deleteKid(data)
      .then(() => {
        // this.trackEvent('ChildInfo', 'deleteChild', '', 0);
        // this.events.publish('child:deleted');
        this.navCtrl.pop();
      });
  }


}
