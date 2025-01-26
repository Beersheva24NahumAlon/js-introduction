import { describe, it, expect, test } from "vitest";
describe("sorting elements of array", () => { 
    it("native sorting in place", () => {
        const array = [1, 2, 3, 2, 4];
        const expected = [1, 2, 2, 3, 4];
        array.sort();
        expect(array).toEqual(expected);
    });
    it("method sort return sorted array (but also sort in place)", () => {
        const array = [1, 2, 3, 2, 4];
        const expected = [1, 2, 2, 3, 4];
        expect(array.sort()).toEqual(expected);
        expect(array).toEqual(expected);
    });
    it("before sorting each element become strings (to able to compare it)", () => {
        const array = [10, 1000, -10, 30, 60];
        const expected = [-10, 10, 1000, 30, 60];
        expect(array.toSorted()).toEqual(expected);
        expect(array).not.toEqual(expected);
    });
    it("sorting with method toSorted (not sorted in place)", () => {
        const array = [10, 1000, -10, 30, 60];
        const expected = [-10, 10, 30, 60, 1000];
        expect(array.toSorted((num1, num2) => num1 - num2)).toEqual(expected);
        expect(array).not.toEqual(expected);
    });
});