import { LightningElement, track } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {

    componentReady = false;

    @track
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];

    connectedCallback() {
        setTimeout(() => {
            this.componentReady = true;
        }, 3000);
    }

}