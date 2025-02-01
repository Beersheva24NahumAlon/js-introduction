export default class Deferred {
    //promise;
    //initialValue;

    constructor() {
        this.promise = new Promise((resolve, reject) => {
            setTimeout((value) => resolve(value), 0);
        });
    }

    then(func) {
        this.promise = this.promise.then((value) => {
            value = value == undefined ? this.initialValue : value;
            return func(value);
        });   
    }

    resolve(initialValue) {
        this.initialValue = initialValue;
    }
}