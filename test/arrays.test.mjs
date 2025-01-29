import { describe, it, expect, test } from "vitest";
describe("destructuring of array", () => {
    const array = [10, 1000, -10, 30, 60];
    it("assigning two first elements of array to variables", () => {
        const [a, b] = array;
        expect(a).toBe(array[0]);
        expect(b).toBe(array[1]);
    });
    it("swaping two variables", () => {
        let a = 1;
        let b = 2;
        [a, b] = [b, a];
        expect(a).toBe(2);
        expect(b).toBe(1);
    });
});