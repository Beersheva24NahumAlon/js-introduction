export function myBind(thisArg) {
    const resFunc = (...args) => { 
        return this.apply(thisArg, args);
    };
    return resFunc;
}

