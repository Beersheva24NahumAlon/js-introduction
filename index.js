function sleep(timeout) {
    return new Promise((resolve, reject) => {
        if (timeout < 0) {
            reject("timeout cann't be negative")
        } else if (timeout > 365 * 24 * 60 * 60 * 1000) {
            reject("timeout cann't be grether than one year");
        } else {
            setTimeout(() => resolve(), timeout);
        } 
    });
}
const timeout = 1000;
// sleep(timeout).then(() => console.log(`${timeout}ms have passed`))
//         .catch((str) => console.log(str)).finally(() => console.log("end of script"));
// console.log(`waiting for ${timeout}ms ...`);

function initialNumber() {
    return 1;
}

function sum(number, factor) {
    return number + (factor ?? 1);
}

function displayNumber(number) {
    if (number > 3) {
        throw "the number cann't be greater than 3";
    } 
    console.log(number);
}
sleep(timeout).then(() => initialNumber())
        .then((num) => sum(num))
                .then((num) => sum(num))
                        .then((num) => sum(num, 0))
                                .then((num) => displayNumber(num))
                                        .catch((er) => console.log(`error: ${er}`));
                            
