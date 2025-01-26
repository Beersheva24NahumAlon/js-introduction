import { describe, it, expect, test } from "vitest";
describe("removing elements from array", () => {
    
    it("removing first element of array", () => {
        const array = [1, 2, 3, 4];
        const expected = [2, 3, 4];
        array.shift();
        expect(array).toEqual(expected);
    });
    it("removing last element of array", () => {
        const array = [1, 2, 3, 4];
        const expected = [1, 2, 3];
        array.pop();
        expect(array).toEqual(expected);
    });
    it("removing middle element of array", () => {
        const array = [1, 2, 3, 4];
        const expected = [1, 4];
        array.splice(1, 2);
        expect(array).toEqual(expected);
    });
});