import { describe, it, expect, test } from "vitest";
import { myBind } from "../functions.mjs";

describe("myBind test", () => {
    const point = {x: 3, y: 4};
    function sumArguments(num3 = 0, num4 = 0) {
        return this.x + this.y + num3 + num4;
    }
    sumArguments.bind = myBind;
    const fun = sumArguments.bind(point);
    it("no additional parameters passed", () => {
        expect(fun()).toBe(7);
    });
    it("all parameters are passed inside function", () => {
        expect(fun(10, 20)).toBe(37);
    });
    it("all parameters are passed inside bind along with this argument", () => {
        const fun = sumArguments.bind(point, 10, 20);
        expect(fun()).toBe(37);
    });
    it("all parameters are passed inside bind and function with this argument", () => {
        const fun = sumArguments.bind(point, 20);
        expect(fun(10)).toBe(37);
    });
});