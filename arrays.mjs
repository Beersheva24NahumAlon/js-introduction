export function myMap(callback) {
    const res = [];
    this.forEach((element, index, array) => {
        const newElement = callback(element, index, array);
        res.push(newElement);
    });
    return res;
}

export function myReduce(callback, initialValue) {
    let index = 0;
    let accumulator = initialValue != undefined ? initialValue : this[index++];
    for (index; index < this.length; index++) {
        accumulator = callback(accumulator, this[index], index, this);
    }   
    return accumulator;

}