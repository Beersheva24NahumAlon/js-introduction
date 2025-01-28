import { describe, it, expect, test } from "vitest";
describe("Object copying", () => {
    it("showing example of references assignment but not copy", () => {
        const person1 = { name: "Vasya", age: 25 };
        const person2 = person1;
        person2.gender = "male";
        expect(person1.gender).toBe("male");
    });
    it("copy using spread opeator", () => {
        const person1 = { name: "Vasya", age: 25 };
        const person2 = { ...person1 };
        person2.city = "Lod";
        expect(person1.city).toBeUndefined;
        person1.city = "Lod";
        expect(person1).not.toBe(person2);
        expect(person1).toEqual(person2);
    });
    it("copy using method assign of class Object", () => {
        const person1 = { name: "Vasya", age: 25 };
        const person2 = Object.assign(person1);
        person2.city = "Lod";
        expect(person1.city).toBeUndefined;
        person1.city = "Lod";
        expect(person1).toBe(person2);
        expect(person1).toEqual(person2);
    });
    it("Not deep copying", () => {
        const person1 = {id: 123, address: {city: "BR7"}};
        const person1Copy = {...person1};
        expect(person1Copy).not.toBe(person1); 
        expect(person1Copy).toEqual(person1);
        person1Copy.address.city = "Ashkelon";
        expect(person1.address.city).toBe("Ashkelon");
    });
    it("Deep copying", () => {
        const person1 = {id: 123, address: {city: "BR7"}};
        const person1Copy = JSON.parse(JSON.stringify(person1));
        expect(person1Copy).not.toBe(person1); 
        expect(person1Copy).toEqual(person1);
        person1Copy.address.city = "Ashkelon";
        expect(person1.address.city).toBe("BR7");
    });
});
describe("JSON functionality", () => {
    const obj = { id: 123, department: "QA", basicSalary: 10000 };
    const json = '{"id":123,"department":"QA","basicSalary":10000}';
    it("getting JSON from object", () => {
        expect(JSON.stringify(obj)).toBe(json);
    });
    it("getting object from JSON", () => {
        expect(JSON.parse(json)).toEqual(obj);
    });
});