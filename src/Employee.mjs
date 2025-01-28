export default class Employee {
    #id;
    #department;
    #basicSalary;

    constructor(id = 0, department = null, basicSalary = 0) {
        this.#id = id;
        this.#department = department;
        this.#basicSalary = basicSalary;
    }

    computeSalary() {
        return this.getBasicSalary();
    }

    getId() {
        return this.#id;
    }

    getDepartment() {
        return this.#department;
    }

    getBasicSalary() {
        return this.#basicSalary;
    }
}