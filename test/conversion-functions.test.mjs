import { describe, it, expect, test } from "vitest";
import { myParseInt, myToStringFromIntNumber, getActualShift, stringShift, stringUnshift} from "../conversion-functions.mjs";
test ("swap primitives", () => {
    let a = 10;
    let b = 20;
    [b, a] = [a, b];
    expect(a).toBe(20);
    expect(b).toBe(10);
});

describe("myPasreInt with radix test suit", () => {
    it("A 11- > 10", () => {
        expect(myParseInt("A", 11)).toBe(10);
    });
    it("aa 16 - > 170", () => {
        expect(myParseInt("aa", 16)).toBe(170);
    });
    it("az 16 -> 10", () => {
        expect(myParseInt("az", 16)).toBe(10);
    });
    it("A null -> Nan", () => {
        expect(myParseInt("A", null)).toBeNaN();
    });
    it("A 0 -> NaN", () => {
        expect(myParseInt("A", 0)).toBeNaN();
    });
    it("A -1 -> NaN", () => {
        expect(myParseInt("A", -1)).toBeNaN();
    });
    it("A -1 -> NaN", () => {
        expect(myParseInt("A", 10)).toBeNaN();
    });
    it("A 37 -> 10", () => {
        expect(myParseInt("A", 37)).toBeNaN();
    });
    it("FZ 36 -> 10", () => {
        expect(myParseInt("FZ", 36)).toBe(parseInt("FZ", 36));
    });
});
describe("myPasreInt test suit", () => {
    it("integer zero", () => {
        expect(myParseInt(0)).toBe(0);
    });
    it("integer number", () => {
        expect(myParseInt("12")).toBe(12);
    });
    it("negative number", () => {
        expect(myParseInt("-12")).toBe(-12);
    });
    it("plus number", () => {
        expect(myParseInt("+12")).toBe(12);
    });
    it("undefined", () => {
        expect(myParseInt()).toBeNaN();
    });
    it("null", () => {
        expect(myParseInt(null)).toBeNaN();
    });
    it("float number", () => {
        expect(myParseInt("12.34")).toBe(12);
    });
    it("leading space", () => {
        expect(myParseInt(" 12")).toBe(12);
    });
    it("space in middle", () => {
        expect(myParseInt("1 2")).toBe(1);
    });
    it("leading not a number", () => {
        expect(myParseInt("a12")).toBeNaN();
    });
    it("begings from ++", () => {
        expect(myParseInt("++12")).toBeNaN();
    });
    it("space afer -", () => {
        expect(myParseInt("- 12")).toBeNaN();
    });
    it("integer", () => {
        expect(myParseInt(12)).toBe(12);
    });
});

describe("myToStringFromIntNumber test suit", () => {
    it("integer number", () => {
        expect(myToStringFromIntNumber(12)).toBe("12");
    });
    it("negative number", () => {
        expect(myToStringFromIntNumber(-12)).toBe("-12");
    });
    it("plus number", () => {
        expect(myToStringFromIntNumber(+12)).toBe("12");
    });
    it("undefined", () => {
        expect(myToStringFromIntNumber()).toBe("");
    });
    it("null", () => {
        expect(myToStringFromIntNumber(null)).toBe("");
    });
    it("float number", () => {
        expect(myToStringFromIntNumber(12.34)).toBe("12");
    });
    it("string leading not a number", () => {
        expect(myToStringFromIntNumber("a12")).toBe("");
    });
    it("string with float", () => {
        expect(myToStringFromIntNumber("12.34")).toBe("12");
    });
});