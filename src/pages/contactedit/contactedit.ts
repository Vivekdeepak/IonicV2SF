import { Component } from '@angular/core';

import { NavController,NavParams,LoadingController,AlertController } from 'ionic-angular';
import { SfdcService } from "../../providers/sfdc-service";

@Component({
  selector: 'contactedit',
  templateUrl: 'contactedit.html'
})
export class ContactEdit {
  
  contact : any;
  loading : any;


  constructor(public alertCtrl: AlertController,public navCtrl: NavController,public service: SfdcService,public navParams: NavParams,public loadingCtrl: LoadingController) {
    let dummyDate = this.navParams;
    this.contact = dummyDate.data;
  }

  saveContact(event){
  	

     this.service.updateContact(this.contact).then(() => {
  		  
    		let alert = this.alertCtrl.create({
  		    title: 'Success',subTitle: 'Contact Updated',buttons: ['Dismiss']
  		  });
  		  alert.present();
        // Navigate to list view of contact
  		  this.navCtrl.popToRoot();

     }).catch(error => console.log("ERROR" + JSON.stringify(error)));

    
  }


}
