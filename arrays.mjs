export function myMap(callback) {
    const res = [];
    this.forEach((element, index) => {
        const newElement = callback(element, index, this);
        res.push(newElement);
    });
    return res;
}

export function myReduce(callback, initialValue) {
    let accumulator = initialValue;
    this.forEach((element, index) => {
        accumulator = callback(accumulator, element, index, this);
    });
    return accumulator;

}