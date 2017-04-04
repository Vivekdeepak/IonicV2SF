import { Component } from '@angular/core';

import {NavController,NavParams,LoadingController} from 'ionic-angular';
import { SfdcService } from "../../providers/sfdc-service";
import { SfdcData } from "../../providers/sfdc-data";
import { AccountDetail } from '../accountdetail/accountdetail';
import { NewAccount } from '../newaccount/newaccount';

@Component({
  selector: 'account-page',
  templateUrl: 'account-page.html'
})
export class Accountlist {

  accountsList : Array<any> ;
  loading : any;
  accountRec : any;

  constructor(public navCtrl: NavController,public navParams: NavParams,public service: SfdcService,public dataService: SfdcData,public loadingCtrl: LoadingController) {
    this.accountsList = [];
    this.giveAllAccount();
  }

  giveAllAccount() { 
        this.accountsList = this.dataService.getAccountData();
        if(this.accountsList == undefined || this.accountsList.length == 0){
            this.loading = this.loadingCtrl.create({
    		      content: 'Please wait...getting Accounts',
    		      dismissOnPageChange: true
    		    }).present();	
                
               this.service.giveAllAccount().then(data => {
               		this.accountsList = data;
                  this.dataService.setAccountList(data);
               		this.loading.dismiss();
            }).catch(error => alert(error));
        }  
  }

  itemTapped(event, account) {

    let loader = this.loadingCtrl.create({
                  content: 'Please wait...getting Account',
                  dismissOnPageChange: true
    })
    loader.present();

    this.service.getAccountById(account.Id).then(data => {
          delete data.attributes;
                loader.dismiss();
                this.accountRec = data;               
                this.navCtrl.push(AccountDetail,this.accountRec);
    }).catch(error => console.log("ERROR" + JSON.stringify(error)));

    
  }

  createAccount(event){
      this.navCtrl.push(NewAccount);
  }

}
