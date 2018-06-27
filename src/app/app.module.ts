import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { KidzPointZ } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddKidPage } from '../pages/add-kid/add-kid';
import { UserDataProvider } from '../providers/user-data/user-data';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { AddPointsPage } from '../pages/add-points/add-points';
import { ChildInfoPage } from '../pages/child-info/child-info';
import { SelectMonsterPage } from '../pages/select-monster/select-monster';


@NgModule({
  declarations: [
    KidzPointZ,
    HomePage,
    LoginPage,
    AddKidPage,
    AddPointsPage,
    SelectMonsterPage,
    ChildInfoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(KidzPointZ),
    IonicStorageModule.forRoot(
      {
        name: '__mydb',
           driverOrder: ['sqlite', 'websql', 'indexeddb']
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    KidzPointZ,
    HomePage,
    LoginPage,
    AddKidPage,
    AddPointsPage,
    ChildInfoPage,
    SelectMonsterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    DataServiceProvider
  ]
})
export class AppModule {}
