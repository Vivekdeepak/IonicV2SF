import { Component } from '@angular/core';

import { NavController,NavParams,LoadingController,AlertController } from 'ionic-angular';
import { SfdcService } from "../../providers/sfdc-service";
import { SfdcData } from "../../providers/sfdc-data";

@Component({
  selector: 'newaccount',
  templateUrl: 'newaccount.html'
})
export class NewAccount {
  
  account : any;
  loading : any;
  ratingV : Array<String>;
  industry : Array<String>;
  typeV : Array<String>;
	


  constructor(public alertCtrl: AlertController,public navCtrl: NavController,public service: SfdcService,public dataService: SfdcData,public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.account = { Name : '',
                     Type : '',
                     Rating : '',
                     Industry : '',
                     Description :'',
                     BillingStreet : '',
                     BillingCity : '',
                     BillingState :'',
                     BillingCountry :''
                   };
    
    this.typeV = ["Prospect"," Customer - Direct","Customer - Channel","Channel Partner / Reseller","Installation Partner","Technology Partner","Other"];

    this.ratingV = ["Hot","Warm","Cold"];
    this.industry = ["Agriculture","Apparel","Banking","Biotechnology","Chemicals","Communications","Construction","Consulting","Education","Electronics","Energy","Engineering","Entertainment"];


  }

  saveAccount(event){
  	 let loader = this.loadingCtrl.create({
                  content: 'Please wait...getting contacts',
                  dismissOnPageChange: true
    })
    loader.present();

     this.service.createAccount(this.account).then(data => {
  		  console.log("RESP" + JSON.stringify(data));
        let acc = { Id : data.id , Name : this.account.Name , Rating : this.account.Rating };
        this.dataService.pushNewAccount(acc);
        // Navigate to list view
  		  this.navCtrl.popToRoot();

     }).catch(error => console.log("ERROR" + JSON.stringify(error)));
  
  }


}
