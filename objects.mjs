export function getOccurencesObject(str) {
    const lastRes = {};
    const res = {};
    if (str != null && str != undefined) {
        str = str.toString();
        for (let i = 0; i < str.length; i++) {
            const key = str[i];
            if (res[key] == undefined) {
                res[key] = 0;
            }
            res[key]++;
        }
        for (let key in res) {
            if (lastRes[res[key]] == undefined) {
                lastRes[res[key]] = "";
            }
            lastRes[res[key]] += key;
        }
    }
    return lastRes;
}