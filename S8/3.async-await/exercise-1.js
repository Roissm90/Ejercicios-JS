/*

Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

*/

async function runTimeOut() {
    const promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, 2000);
    });

    await promise.then(function() {
        console.log('Time out!');
    });
}
runTimeOut();