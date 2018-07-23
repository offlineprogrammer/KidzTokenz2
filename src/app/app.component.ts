import { Component,NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { UserDataProvider } from '../providers/user-data/user-data';
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class KidzPointZ {
  rootPage:any = LoginPage;
  zone: NgZone;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private userData: UserDataProvider)  {
    this.zone = new NgZone({});
    userData.getGuestUser()
      .then((response) => {
        if (userData.isGuestUser) {
          this.rootPage = HomePage;
        } else {
           firebase.initializeApp({
            apiKey: "AIzaSyDcMnq_Xaapjdskm2_IBLyOdDt3Z9v4tXc",
            authDomain: "kidztokenztest.firebaseapp.com",
            databaseURL: "https://kidztokenztest.firebaseio.com",
            projectId: "kidztokenztest",
            storageBucket: "kidztokenztest.appspot.com",
            messagingSenderId: "263375574643"
          });
          const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            this.zone.run(() => {
              if (!user) {
                this.rootPage = LoginPage;
                unsubscribe();
              } else {
                this.rootPage = HomePage;
                unsubscribe();
              }
            });
          }); 
        }
      }); 
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

