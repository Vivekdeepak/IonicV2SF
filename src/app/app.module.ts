import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ContactDetail } from '../pages/contactdetail/contactdetail';
import { ContactEdit } from '../pages/contactedit/contactedit';
import { Accountlist } from '../pages/account/account-page';
import { AccountDetail } from '../pages/accountdetail/accountdetail';
import { NewAccount } from '../pages/newaccount/newaccount';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SfdcService } from "../providers/sfdc-service";
import { SfdcData } from "../providers/sfdc-data";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ContactDetail,
    ContactEdit,
    Accountlist,
    AccountDetail,
    NewAccount
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ContactDetail,
    ContactEdit,
    Accountlist,
    AccountDetail,
    NewAccount
  ],
  providers: [SfdcService,SfdcData,StatusBar,SplashScreen,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
