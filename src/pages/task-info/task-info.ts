import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  DataServiceProvider
} from '../../providers/data-service/data-service';
import {
  Kid
} from '../../models/kid';
import {
  Task
} from '../../models/task';


/**
 * Generated class for the TaskInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-info',
  templateUrl: 'task-info.html',
})
export class TaskInfoPage {
  oTask: Task;
  oKid: Kid;
  tokenNumbers: number[];
  tokenstriples: number[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dataService: DataServiceProvider) {
      this.oTask = navParams.get('task');
      this.oKid= navParams.get('kid');
      this.tokenNumbers = this.fillArrayWithNumbers(+this.oKid.tokenNumbers);
    this.tokenstriples = this.getTriples();
  }


  fillArrayWithNumbers(n: number) {
    let nArray = [];
    nArray = Array.apply(null, Array(n));
    return nArray.map(function (x, i) {
      return i;
    });
  }

  getTriples() {
    let triples = [];
    let length = this.tokenNumbers.length;
    for (let i = 0; i < length; i += 2) {
      let trio = [];
      trio.push(this.tokenNumbers[i]);
      if (i + 1 < length) {
        trio.push(this.tokenNumbers[i + 1]);
      }
      triples.push(trio);
    }
    return triples;
  }

  private updateData(): void {
    this.dataService.updateTasks(this.oKid)
      .then(() => {
        if (this.oTask.score === this.oKid.tokenNumbers) {
          // this.playSound('win');
        }
        // let oGAEvent: GAEvent;
        // oGAEvent = {
        //   category: 'Task',
        //   action: 'UpdateScore',
        //   label: this.oTask.name,
        //   value: this.oTask.score
        // };
        // this.gaService.trackEvent(oGAEvent);


      });
  }

  addToken(): void {
    console.log(this.oTask.score);
    this.oTask.score++;
    this.updateData();
    if (this.oTask.negativeReinforcement) {
      this.trackEvent('NRTask', 'addToken', this.oTask.name, this.oTask.score);
    } else {
      this.trackEvent('PRTask', 'addToken', this.oTask.name, this.oTask.score);
    }
    console.log(this.oTask.score);
  }

  removeToken(): void {
    console.log(this.oTask.score);
    this.oTask.score--;
    this.updateData();
    if (this.oTask.negativeReinforcement) {
      this.trackEvent('NRTask', 'removeToken', this.oTask.name, this.oTask.score);
    } else {
      this.trackEvent('PRTask', 'removeToken', this.oTask.name, this.oTask.score);
    }
    console.log(this.oTask.score);
  }

  resetScore(): void {
    this.oTask.score = 0;
    this.updateData();
    if (this.oTask.negativeReinforcement) {
      this.trackEvent('NRTask', 'resetScore', this.oTask.name, this.oTask.score);
    } else {
      this.trackEvent('PRTask', 'resetScore', this.oTask.name, this.oTask.score);
    }
  }

  trackEvent(sCategory: string,
    sAction: string,
    sLabel: string,
    nValue: number) {
  /*   let oGAEvent: GAEvent;
    oGAEvent = {
      category: sCategory,
      action: sAction,
      label: sLabel,
      value: nValue
    };
    this.gaService.trackEvent(oGAEvent); */
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskInfoPage');
  }

}
