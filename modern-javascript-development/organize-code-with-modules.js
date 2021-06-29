// index
import { printMsg } from './module1.js';
import * as message from './module2.js';
printMsg(message.msg1 + message.msg2);  


// module 1
export function printMsg(message) {
    const div = document.createElement('div');
    div.textContent = message;
    document.body.appendChild(div);
}


// module 2
let msg1 = 'Hello World! ';
let msg2 = 'This message was loaded from a module.';
export { msg1, msg2 }; 