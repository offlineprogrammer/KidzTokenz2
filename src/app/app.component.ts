import { Component,NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AddKidPage } from '../pages/add-kid/add-kid';
import { HomePage } from '../pages/home/home';
import { UserDataProvider } from '../providers/user-data/user-data';
//import { AddPointsPage } from '../pages/add-points/add-points';

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
/*           firebase.initializeApp({
            apiKey: "AIzaSyCh4LNH_Srbq7LXCC8QRUnz2BiodEvK5MQ",
            authDomain: "kidztokenz.firebaseapp.com",
            databaseURL: "https://kidztokenz.firebaseio.com",
            storageBucket: "kidztokenz.appspot.com",
            messagingSenderId: "910876779586"
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
          }); */
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

