export function myBind(thisArg, ...bindArgs) {
    return (...args) => {
        args.push(...bindArgs);
        thisArg.run = this;
        return thisArg.run(...args);
    };
}

