import { Injectable } from '@angular/core';
import { DataService } from 'forcejs';

@Injectable()
export class SfdcService {

    service: any;

    constructor() {
        this.service = DataService.getInstance();
    }

    /*
    * Normally this data will come from web service to keep this simple for a demo app
    * I am getting data using query. Web service will give you more control on data
    */ 

    getAllContact() {
        return this.service.query("SELECT Id,FirstName,LastName FROM Contact LIMIT 50").then(response => response.records).catch(error => console.log("ERROR" + JSON.stringify(error)));
    }

    giveAllAccount(){    
        return this.service.query("SELECT Id,Name,Type,Rating FROM Account LIMIT 50").then(response => response.records).catch(error => console.log("ERROR" + JSON.stringify(error)));
    }

    getAccountById(accountId){
       return this.service.retrieve("Account",accountId,"Id,Name,Type,Rating,AnnualRevenue,Description,NumberOfEmployees,Industry,BillingStreet,BillingCity,BillingState,BillingCountry,BillingPostalCode").then(response => response).catch(error => console.log("ERROR" + JSON.stringify(error))); 
    }

    getContactById(contactId){
        return this.service.retrieve("Contact",contactId,"Id,FirstName,LastName,Email,Phone,Title,Department,AccountId,Account.Name,MailingStreet,MailingCity,MailingState,MailingCountry,MailingPostalCode").then(response => response).catch(error => console.log("ERROR" + JSON.stringify(error)));
    }

    createAccount(account){
        return this.service.create("Account",account).then(response => response).catch(error => console.log("ERROR" + JSON.stringify(error)));
    }

    updateContact(contact){
        //console.log("DATA" + JSON.stringify(contact))
        
        
        let tempContact = contact;
        delete tempContact.Account;
        delete tempContact.AccountId;

        return this.service.update("Contact",tempContact).then().catch(error => console.log("ERROR" + JSON.stringify(error)));
    }

}
