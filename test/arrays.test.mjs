import { describe, it, expect, test } from "vitest";
describe("meaning of spread operator for arrays and arguments", () => {
    it("finding maximal number of array", () => {
        const numbers = [1, 2, 3, 4];
        expect(Math.max(1, 2)).toBe(2);
        expect(Math.max(...numbers)).toBe(4);
    });
    it("pushing to array", () => {
        const array = [1, 2, 3, 4];
        const expectedArray = [1, 2, 3, 4, 5, 6];
        const pushArray = [5, 6];
        array.push(...pushArray);
        //array.push(5, 6);
        expect(array).toEqual(expectedArray);
    });
    it("coping arrays", () => {
        const srcArray = [1, 2, 3, 4];
        const destArray = [...srcArray];
        expect(destArray).not.toBe(srcArray);
        expect(destArray).toEqual(srcArray);
    });
});