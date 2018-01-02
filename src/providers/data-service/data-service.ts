import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  UserDataProvider
} from '../user-data/user-data';
import {
  Kid
} from '../../models/kid';
import {
  Storage
} from '@ionic/storage';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  public kidzList: any;
  public currentUser: any;
  public kidzPhotosRef: any;
  private KIDS_KEY: string = 'kids';

  constructor(public http: HttpClient, private userData: UserDataProvider, private storage: Storage) {
    console.log('Hello DataServiceProvider Provider');
  }

  private saveData(data: any, key: string) {
    if (data) {
      let newData = JSON.stringify(data);

      this.storage.set(key, newData);
    } else {
      this.storage.remove(key);
    }
  }

  getKids(): Promise < Kid[] > {

    try {
      return new Promise(resolve => {
        if (this.userData.isGuestUser) {
          this.storage.get(this.KIDS_KEY).then((val) => {
            console.log(val);
            this.kidzList = JSON.parse(val);
            resolve(this.kidzList);
          })
        } else {
          this.kidzList.on('value', snapshot => {
            let rawList = [];
            snapshot.forEach(snap => {
              rawList.push({
                childId: snap.key,
                name: snap.val().name,
                tokenType: snap.val().tokenType,
                negativetokenType: snap.val().negativetokenType,
                tokenNumbers: snap.val().tokenNumbers,
                srcTokenNumbers: snap.val().srcTokenNumbers,
                isActive: snap.val().isActive,
                childimage: snap.val().childimage,
                tasksCount: snap.val().tasksCount,
                kidPhoto: snap.val().kidPhoto,
                tasks: snap.val().tasks
              });
            });
            resolve(rawList);
          });
        }

      });
    } catch (error) {

      //  this.logError(error);

    }

  }

  getMonsters(): string[] {
    let kidMonsters: any =
      ['assets/monsters/1.png',
        'assets/monsters/2.png',
        'assets/monsters/3.png',
        'assets/monsters/4.png',
        'assets/monsters/5.png',
        'assets/monsters/6.png',
        'assets/monsters/7.png',
        'assets/monsters/8.png',
        'assets/monsters/9.png',
        'assets/monsters/10.png',
        'assets/monsters/11.png',
      ];
    return kidMonsters;
  }

  createKid(data: Kid): Promise < any > {
    return new Promise(resolve => {
      if (this.userData.isGuestUser) {
        if (typeof this.kidzList === 'undefined') {
          this.kidzList = [];
        }
        if (this.kidzList === null) {
          this.kidzList = [];
        }
        this.kidzList.push(data);
        this.saveData(this.kidzList, this.KIDS_KEY);
        resolve("Done");
      } else {

        this.kidzList.push({
          childimage: '', //data.childimage,
          name: data.name,
          isActive: data.isActive
        }).then(newKid => {
          this.kidzList.child(newKid.key).child('childId').set(newKid.key);
          resolve("Done");
        });
      }

    });
  }

  deleteKid(data: Kid): Promise<any> {
    return new Promise((resolve, reject) => {
      if (typeof this.kidzList === 'undefined') {
        this.kidzList = [];
      }
      if (this.userData.isGuestUser) {
        let index = this.kidzList.indexOf(data);
        if (index > -1) {
          this.kidzList.splice(index, 1);
        }
        this.saveData(this.kidzList, this.KIDS_KEY);
      }
      else {
        var adaRef = this.kidzList.child(data.kidId);
        adaRef.remove()
          .then(function () {
            console.log("Remove succeeded.")
          })
          .catch(function (error) {
            console.log("Remove failed: " + error.message)
          });
      }
      resolve('Done');
    }).catch((error) => {
      // reject('Only available on a device');
    });
  }


}
