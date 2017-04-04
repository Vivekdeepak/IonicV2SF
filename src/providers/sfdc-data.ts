import { Injectable } from '@angular/core';

@Injectable()
export class SfdcData {

    accountList: any;
    contactList: any;
    

    constructor() {
        
    }

    /* To maintain data locally in app when app is running 
    *  pass data accross different page and controller 
    *  this class is used. This does not maintain app data offline
    */

    getAccountData(){
    	return this.accountList;
    }

    setAccountList(data){
    	this.accountList = [];
    	this.accountList = data;
    	console.log("Account Data Set");
    }

    getContactData(){
    	return this.contactList;
    }

    setContactList(data){
    	this.contactList = [];
    	this.contactList = data;
    }

    pushNewAccount(acc){
        this.accountList.push(acc);
    }


}
