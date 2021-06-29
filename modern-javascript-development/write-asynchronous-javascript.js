function doSomething(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                console.log(msg);
                resolve();                
            } catch (error) {
                reject(error)
            }
        }, 1000);
    });
}

doSomething("message")
    .then(() => doSomething("message2"))
    .then(() => doSomething("message3"))
    .catch(err => console.error(err.message));

async function doSomethingManyTimes() {
    try {
        await doSomething("message-async");
        await doSomething("message2-async");
        await doSomething("message3-async");
    } catch (error) {
        console.error(error.message);
    }
}

doSomethingManyTimes()
