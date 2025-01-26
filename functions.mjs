export function myBind(thisArg, ...bindArgs) {
    return (...args) => {
        args.push(...bindArgs);
        const restore = thisArg.run;
        thisArg.run = this;
        const res = thisArg.run(...args)
        restore == undefined ? delete thisArg.run : thisArg.run = restore;
        return res;
    };
}

