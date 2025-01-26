import { describe, it, expect, test } from "vitest";
describe("finding elements in array", () => {
    it("method indexOf / lastIndexOf for primitivies", () => {
        const array = [1, 2, 3, 2, 4];
        expect(array.indexOf(6)).toBe(-1);
        expect(array.indexOf(2)).toBe(1);
        expect(array.lastIndexOf(2)).toBe(3);
    });
    it("finding in array of objects", () => {
        const obj1 = {x: 5};
        const array = [
            {x: 4}, 
            obj1, 
            {x: 6}
        ];
        expect(array.indexOf({x: 4})).toBe(-1); //different references
        expect(array.indexOf(obj1)).toBe(1);
        expect(array.findIndex(o => o.x === 4)).toBe(0);
        expect(array.findIndex(o => o.x === 7)).toBe(-1);
    });
    it("finding object in array of objects", () => {
        const obj1 = {x: 5};
        const array = [
            {x: 4}, 
            obj1, 
            {x: 6}
        ];
        expect(array.find(o => o.x === 4)).toEqual({x: 4});
        expect(array.find(o => o.x === 7)).toBeUndefined();
    });
    it("finding several primitivies", () => {
        const array = [1, 2, 3, 2, 4];
        expect(array.filter(n => n % 2 == 0)).toEqual([2, 2, 4]);
    });
    it("finding several objects", () => {
        const obj1 = {x: 5};
        const array = [
            {x: 4}, 
            obj1, 
            {x: 7}
        ];
        expect(array.filter(o => o.x % 2 == 1)).toEqual([{x: 5}, {x: 7}]);
    });
});