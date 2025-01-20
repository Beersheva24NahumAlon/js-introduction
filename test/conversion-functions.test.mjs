import { describe, it, expect } from "vitest";
import { myParseInt, myToStringFromIntNumber } from "../conversion-functions.mjs";
describe("myPasreInt test suit", () => {
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