import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  public isGuestUser: boolean;
  public isStartup: boolean = true;

  constructor(public http: HttpClient,private storage: Storage) {
    console.log('Hello UserDataProvider Provider');
  }

  setGuestUser(bGuestUser: boolean): void {
    console.log('Set Your name is', bGuestUser);
    this.storage.set('isGuestUser', bGuestUser);
    this.isGuestUser = bGuestUser;
    this.isStartup = false;
  }


}
