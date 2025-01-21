export function getOccurencesObject(str) {
    const res = {};
    if (str != null && str != undefined) {
        str = str.toString();
        for (let i = 0; i < str.length; i++) {
            const key = str[i];
            if (res[key] == undefined) {
                res[key] = 0;
            }
            res[key] = res[key] + 1;
        }
    }
    return res;
}
