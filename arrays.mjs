export function myMap(callback) {
    const res = [];
    this.forEach((element, index, array) => {
        const newElement = callback(element, index, array);
        res.push(newElement);
    });
    return res;
}

export function myReduce(callback, initialValue) {
    let accumulator = initialValue;
    this.forEach((element, index, array) => {
        accumulator = callback(accumulator, element, index, array);
    });
    return accumulator;

}