import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
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
  Task
} from '../../models/task';

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  oKid: Kid;
  form: FormGroup;
  taskPicture: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,private viewController: ViewController,private dataService: DataServiceProvider) {
    this.oKid = navParams.get('kid');
    this.form = this.formBuilder.group({
      taskName: ['', Validators.required],
      negReinforcement: [false, Validators.required],

    });
    this.taskPicture=null;
  }

  close() {
    this.viewController.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
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

    let newtask: Task;
    newtask = {
      taskId: this.generateUUID(),
      kidId: this.oKid.kidId,
      name: this.form.controls["taskName"].value,
      score: 0,
      taskimage: 'assets/imgs/gift.png',
      negativeReinforcement: this.form.controls["negReinforcement"].value,
      taskPhoto: '',

    };
    if (this.form.status === 'VALID') {
       if (typeof this.oKid.tasks === 'undefined') {
          this.oKid.tasks = [];
        }
      // this.oChild.tasks.push(newtask);
      // this.oChild.tasksCount += 1;
      this.dataService.creatTask(this.oKid, newtask, this.taskPicture)
        .then(() => {
          if (newtask.negativeReinforcement) {
            //this.trackEvent('NRTask', 'AddTask', newtask.name, 0);
          } else {
            //this.trackEvent('PRTask', 'AddTask', newtask.name, 0);
          }

        //  this.close();
        });
    };


  }

}
