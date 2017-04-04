import { Injectable } from '@angular/core';

@Injectable()
export class SfdcData {

    accountList: any;
    contactList: any;


    constructor() {
        
    }

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
