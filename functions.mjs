// // function sum(num1, num2) {
// //     return this.x * num1 + this.x * num2;
// // }
// // sum.a = 2;
// // sum.call({x:5}, 10, 10);
// const point = {
//     x: 5,
//     y:10
// };
// function displayPoint(z) {
//     console.log(`x:${this.x}; y:${this.y}; z:${z}`)
// }
// const display = displayPoint.bind(point);
// display(40)
// // Arrow-functions
// const displayPointArrow = (z) => {
//     console.log(`x: ${this.x}, y: ${this.y}, z: ${z}`)
// };
// const displayArrow = displayPointArrow.bind(point, 40);
// //throws exception, because arrow-functions doesn't have "this"
// // displayArrow(); 

// //In method "call" we should pass parameters
// display.call(point, 45);
// //In method "apply" we should pass array of parametrs
// display.apply(point, [50]);

export function myBind(thisArg) {
    const func = (num3, num4) => { 
        return this.apply(thisArg, [num3, num4]);
    };
    return func;
}

