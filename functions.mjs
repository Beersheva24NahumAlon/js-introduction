// function sum(num1, num2) {
//     return num1 * this.x + num2 * this.x;
// }

// sum.a = 2;
// sum(10, 10);
// sum.call({x:5}, 10, 10)
const point = {x: 5, y: 10};
function displayPoint() {
    console.log(`x: ${this.x}, y: ${this.y}, z: ${z}`);
}
const display = displayPoint.bind(point, 20);
display();