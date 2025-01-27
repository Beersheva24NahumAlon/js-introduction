const person1 = { id: 123, name: "Vasya", age: 25 };
const person2 = { id: 124, name: "Sarah", age: 30 };
function createPerson(id, name, age) {
    return { id, name, age };
}
const person3 = createPerson(125, "Avraham", 35);
function Person(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
}
const person4 = new Person(126, "Isaac", 40);
const prototype = Object.getPrototypeOf(Person);
function Employee(id, name, basicSalary) {
    this.id = id;
    this.name = name;
    this.basicSalary = basicSalary;
}
Employee.prototype.computeSalary = function() {
    return this.basicSalary;
}

Employee.prototype.toString = function() {
    return `id: ${this.id}, name: ${this.name}, basicSalary: ${this.basicSalary}!!!`;
}
const employee1 = new Employee(111, "Vasya", 10000);
const salary = employee1.computeSalary();
const str1 = employee1.toString();
const employee2 = {id: 222, name: "Petya", basicSalary: 15000};
Object.setPrototypeOf(employee2, Employee.prototype);
const str2 = employee2.toString()