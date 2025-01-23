import { describe, it, expect, test } from "vitest";
import { getOccurencesObject } from "../objects.mjs";
describe("object iterating", () => {
    const person = { name: "Vasya", age: 25 };
    it("for-in iterating", () => {
        const keys = ["name", "age"];
        const values = ["Vasya", 25];
        const actualKeys = [];
        const actualValues = [];
        for (let key in person) {
            actualKeys.push(key);
            actualValues.push(person[key]);
        }
        expect(actualKeys).toEqual(keys);
        expect(actualValues).toEqual(values);
    });
    it("keys iterating", () => {
        const keys = ["name", "age"];
        const values = ["Vasya", 25];
        const actualKeys = [];
        const actualValues = [];
        for (let key of Object.keys(person)) {
            actualKeys.push(key);
            actualValues.push(person[key]);
        }
        expect(actualKeys).toEqual(keys);
        expect(actualValues).toEqual(values);
    });
    it("values iterating", () => {
        const values = ["Vasya", 25];
        const actualValues = [];
        for (let value of Object.values(person)) {
            actualValues.push(value);
        }
        expect(actualValues).toEqual(values);
    });
    it("entries iterating", () => {
        const keys = ["name", "age"];
        const values = ["Vasya", 25];
        const actualKeys = [];
        const actualValues = [];
        for (let entry of Object.entries(person)) {
            actualKeys.push(entry[0]);
            actualValues.push(entry[1]);
        }
        expect(actualKeys).toEqual(keys);
        expect(actualValues).toEqual(values);
    });
});