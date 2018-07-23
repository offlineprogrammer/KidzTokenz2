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
import { HttpClientModule } from '@angular/common/http';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { KidInfoPage } from '../pages/kid-info/kid-info';
import { EditKidPage } from '../pages/edit-kid/edit-kid';
import { AddTaskPage } from '../pages/add-task/add-task';
import { TaskInfoPage } from '../pages/task-info/task-info';
import { TokentypePage } from '../pages/tokentype/tokentype';
import { TokennumbersPage } from '../pages/tokennumbers/tokennumbers';
import { SelectMonsterPage } from '../pages/select-monster/select-monster';
import { AppInfoPage } from '../pages/app-info/app-info';

import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import { Facebook } from '@ionic-native/facebook';
import { AuthDataProvider } from '../providers/auth-data/auth-data';


@NgModule({
  declarations: [
    KidzPointZ,
    HomePage,
    LoginPage,
    AddKidPage,
    SelectMonsterPage,
    KidInfoPage,
    TokentypePage,
    EditKidPage,
    AddTaskPage,
    TaskInfoPage,
    AppInfoPage,
    TokennumbersPage
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
    KidInfoPage,
    TokentypePage,
    EditKidPage,
    AddTaskPage,
    TokennumbersPage,
    TaskInfoPage,
    AppInfoPage,
    SelectMonsterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    SocialSharing,
    Screenshot,
    Facebook,
    DataServiceProvider,
    AuthDataProvider,
    AuthDataProvider
  ]
})
export class AppModule {}
