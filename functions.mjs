export function myBind(thisArg, ...bindArgs) {
    return (...args) => {
        const restore = thisArg.run;
        args.push(...bindArgs);
        thisArg.run = this;
        const res = thisArg.run(...args)
        restore == undefined ? delete thisArg.run : thisArg.run = restore;
        return res;
    };
}

