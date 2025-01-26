import { describe, it, expect, test } from "vitest";
import { myMap, myReduce } from "../arrays.mjs";
describe("map and reduce methods", () => {
    const array = [10, 1000, -10, 30, 60];
    array.map = myMap;
    array.reduce = myReduce;
    it("myMap testing", () => {
        const expected = [10, 1001, -8, 33, 64];
        expect(array.map((e, i) => e + i)).toEqual(expected);
    });
    it("myReduce testing", () => {
        expect(array.reduce((sum, e) => sum += e)).toBe(1090);
        expect(array.reduce((obj, e) => {
            obj.min = e < obj.min ? e : obj.min;
            obj.max = e > obj.max ? e : obj.max;
            return obj;
        }, { min: array[0], max: array[0] })).toEqual({ min: -10, max: 1000 });
    });
});