import { describe, it, expect } from "vitest";
import Employee from "../src/Employee.mjs";
import WageEmployee from "../src/WageEmployee.mjs";
import Manager from "../src/Manager.mjs";
import SalesPerson from "../src/SalesPerson.mjs";

describe("constructors, getters and computeSalary tests", () => {
    const basicSalary = 10000;
    const department = "dep1";
    const id = 1;
    const wage = 50;
    const hours = 5;
    const sales = 200;
    const percent = 0.1;
    const factor = 1.6;
    const employee = new Employee(id, department, basicSalary);
    const wageEmployee = new WageEmployee(id, department, basicSalary, wage, hours);
    const salesPerson = new SalesPerson(id, department, basicSalary, wage, hours, percent, sales);
    const manager = new Manager(id, department, basicSalary, factor);
    it("employee test", () => {
        expect(employee.getBasicSalary()).toBe(basicSalary);
        expect(employee.computeSalary()).toBe(basicSalary);
        expect(employee.getDepartment()).toBe(department);
        expect(employee.getId()).toBe(id);
    });
    it("wage employee test", () => {
        expect(wageEmployee.getWage()).toBe(wage);
        expect(wageEmployee.computeSalary()).toBe(basicSalary + wage * hours);
        expect(wageEmployee.getHours()).toBe(hours);
    });
    it("sales person test", () => {
        expect(salesPerson.getPercent()).toBe(percent);
        expect(salesPerson.computeSalary()).toBe(basicSalary + wage * hours + sales * percent / 100);
        expect(salesPerson.getSales()).toBe(sales);
    });
    it("manager test", () => {
        expect(manager.getFactor()).toBe(factor);
        expect(manager.computeSalary()).toBe(basicSalary * factor);
    });
    it("polymorphism test", () => {
        const employees = [employee, wageEmployee, salesPerson, manager];
        const budget = employees.reduce((sum, o) => sum + o.computeSalary(), 0);
        const expectedBudget = employee.computeSalary() + wageEmployee.computeSalary() + salesPerson.computeSalary() + manager.computeSalary();
        expect(budget).toBe(expectedBudget);
    });
    it("setPrototype", () => {
        const obj = {basicSalary: 12000};
        Object.setPrototypeOf(obj, Employee.prototype);
        const prototype = Object.getPrototypeOf(obj);
        expect(obj.computeSalary()).toBe(12000)
    });
});