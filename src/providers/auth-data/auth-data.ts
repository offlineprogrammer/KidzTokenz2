import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

/*
  Generated class for the AuthDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthDataProvider {

  public fireAuth: any;
  public userProfile: any;
  public isGuestUser: boolean;

  loginUser(accessToken: string): any {
          let facebookCredential = firebase.auth.FacebookAuthProvider
                    .credential(accessToken);
                    console.log("Firebase  ");
        return this.fireAuth.signInWithCredential(facebookCredential)
    }


  constructor(public http: HttpClient) {
    console.log('Hello AuthDataProvider Provider');
  }

}
