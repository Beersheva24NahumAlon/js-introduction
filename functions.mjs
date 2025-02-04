export function myBind(thisArg, ...bindArgs) {
    return (...args) => {
        const key = Symbol();
        thisArg[key] = this;
        const res = thisArg[key](...args, ...bindArgs)
        delete thisArg[key];
        return res;
    };
}

