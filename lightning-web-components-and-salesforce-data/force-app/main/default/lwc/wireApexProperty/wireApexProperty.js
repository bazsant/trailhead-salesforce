import getRelatedContacts from "@salesforce/apex/AccountController.getRelatedContacts";
import { api, LightningElement, wire } from "lwc";

export default class WireApexProperty extends LightningElement {
    @api 
    recordId;

    @wire
    (getRelatedContacts, { accountId: '$recordId'}) contacts;

}