import { describe, it, expect, test } from "vitest";
describe("array introspecting", () => { 
    const numbers = [1, 2, 3, 2, 4];
    const objects = [
        {x: 4}, 
        {x: 5},
        {x: 6}
    ];
    it("array of primitivies includes element", () => { 
        expect(numbers.includes(3)).toBeTruthy()
        expect(numbers.includes(5)).toBeFalsy()
    });
    it("array of objects includes element", () => { 
        expect(objects.find(e => e.x === 5)).toBeTruthy();
        expect(objects.find(e => e.x === 7)).toBeFalsy();
    });
    it("testing if all elemets match some condition", () => {
        expect(numbers.every(e => e % 2 === 0)).toBeFalsy();
        expect(objects.every(e => e.x > 0)).toBeTruthy();
    });
    it("testing if some elemets match some condition", () => {
        expect(numbers.some(e => e % 2 === 0)).toBeTruthy();
        expect(objects.some(e => e.x < 0)).toBeFalsy();
    });
});