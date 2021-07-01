import getRelatedContacts from "@salesforce/apex/AccountController.getRelatedContacts";
import { api, LightningElement } from "lwc";
import { reduceErrors } from 'c/ldsUtils'

export default class CallApexImperative extends LightningElement {
    @api recordId;
    errors;
    handleButtonClick(event) {
        getRelatedContacts({ accountId: '$recordId'})
            .then(contacts => {

            })
            .catch(err => {
                this.errors = reduceErrors(err);
            })
    }
}