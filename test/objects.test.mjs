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
        const person2 = {...person1};
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
    
});