import { describe, it, expect, test } from "vitest";
describe("slice, join and string split", () => { 
    const numbers = [1, 2, 3, 2, 4];
    it("slice method", () => {
        const expected = [3, 2];
        expect(numbers.slice(2, 4)).toEqual(expected);
        expect(numbers.slice(7, 9)).toEqual([]);
        expect(numbers.slice()).toEqual(numbers); //not deep copy
    });
    it("join method", () => {
        expect(numbers.join("")).toBe("12324");
    });
    it("split method", () => {
        expect("12324".split("").map(s => +s)).toEqual(numbers);
    });
});