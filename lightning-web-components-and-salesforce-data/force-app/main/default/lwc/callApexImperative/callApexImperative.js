import getRelatedContacts from "@salesforce/apex/AccountController.getRelatedContacts";
import { api, LightningElement } from "lwc";

export default class CallApexImperative extends LightningElement {
    @api recordId;

    handleButtonClick(event) {
        getRelatedContacts({ accountId: '$recordId'})
            .then(contacts => {

            })
            .catch(err => {
                
            })
    }
}