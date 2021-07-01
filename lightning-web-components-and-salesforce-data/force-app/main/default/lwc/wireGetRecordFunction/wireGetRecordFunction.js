import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import {reduceErrors} from 'c/ldsUtils';
import getRelatedContacts from '@salesforce/apex/AccountController.getRelatedContacts';

export default class WireGetRecord extends LightningElement {
    @api recordId;

    data;
    error;
    errors;
    
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
    wiredAccount({ data, error }) {

        console.log('Execute logic each time a new value is provisioned');

        if (data) {
            this.data = data;
            this.error = undefined;

        } else if (error) {
            this.error = error;
            this.data = undefined;
        }
    }

    @wire(getRelatedContacts, {accountId: '$recordId'})
    wiredContacts({data, error}) {
        if (error) {
            this.errors = reduceErrors(error);
        }
    }
}