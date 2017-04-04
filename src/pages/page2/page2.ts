import { Component } from '@angular/core';

import { NavController,NavParams,LoadingController } from 'ionic-angular';

import { SfdcService } from "../../providers/sfdc-service";
import { SfdcData } from "../../providers/sfdc-data";
import { ContactDetail } from '../contactdetail/contactdetail';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  
  contactList: Array<any>;
  loading : any;
  contactRec: any;

  constructor(public navCtrl: NavController,public service: SfdcService,public dataService: SfdcData,public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.contactList = [];
    this.getAllContact();
  }

  getAllContact() {
     this.contactList = this.dataService.getContactData();
     if(this.contactList == undefined || this.contactList.length == 0){
             this.loading = this.loadingCtrl.create({
                content: 'Please wait...getting contacts',
                dismissOnPageChange: true
             }).present();

             this.service.getAllContact().then(data => {
                  this.contactList = data;
                  this.dataService.setContactList(data);
                  this.loading.dismiss();
             }).catch(error => console.log("ERROR" + JSON.stringify(error)));
     }
  }

  itemTapped(event, contact) {

    let loader = this.loadingCtrl.create({
                  content: 'Please wait...getting contacts',
                  dismissOnPageChange: true
    })
    loader.present();

    this.service.getContactById(contact.Id).then(data => {
          delete data.attributes;
          delete data.Account.attributes;
                loader.dismiss();
                this.contactRec = data;               
                this.navCtrl.push(ContactDetail,this.contactRec);
    }).catch(error => console.log("ERROR" + JSON.stringify(error)));

    
  }

}
