import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController } from 'ionic-angular';


@Component({
  selector: 'accountdetail',
  templateUrl: 'accountdetail.html'
})
export class AccountDetail {
  
  account : any;

  constructor(public navCtrl: NavController,public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.account = this.navParams.data; 
  }

}