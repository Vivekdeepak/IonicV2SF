import { Component } from '@angular/core';

import { NavController,NavParams,LoadingController } from 'ionic-angular';
import { ContactEdit } from '../contactedit/contactedit';

@Component({
  selector: 'contactdetail',
  templateUrl: 'contactdetail.html'
})
export class ContactDetail {
  
  contact : any;

  constructor(public navCtrl: NavController,public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.contact = this.navParams.data; 
  }

  editContact(event){
    this.navCtrl.push(ContactEdit,this.contact);
  }

}
