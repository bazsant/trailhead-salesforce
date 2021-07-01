import getRelatedContacts from "@salesforce/apex/AccountController.getRelatedContacts";
import { api, LightningElement, wire } from "lwc";
import { reduceErrors } from 'c/ldsUtils'

export default class WireApexProperty extends LightningElement {
    @api 
    recordId;

    @wire
    (getRelatedContacts, { accountId: '$recordId'}) contacts;
    
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}