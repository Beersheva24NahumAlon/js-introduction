import { describe, it, expect, test } from "vitest";
import { stringShift, stringUnshift} from "../conversion-functions.mjs";
test ("test", () => {

});
describe ("stringShift", () => {
    it("regular Hello", () => {
        const str = "Hello";
        const shift = 1000000;
        expect(stringShift(str, 3)).toBe("Khoor");
        expect(stringUnshift(stringShift(str, shift),shift)).toBe(str);
    });
    it("empty string, shift number", () => {
        const str = "";
        const shift = 1;
        expect(stringUnshift(stringShift(str, shift),shift)).toBe(str);
    });
    it("undefined string, shift number", () => {
        const str = undefined;
        const shift = 1;
        expect(stringUnshift(stringShift(str, shift),shift)).toBe(str);
    });
    it("null string, shift number", () => {
        const str = null;
        const shift = 1;
        expect(stringUnshift(stringShift(str, shift),shift)).toBe(str);
    });
    it("integer instead string, shift number", () => {
        const str = 333;
        const shift = 1;
        expect(stringShift(str, shift)).toBe("444");
        expect(stringUnshift(stringShift(str, shift),shift)).toBe(str.toString());
    });
    it("regular string, undefined shift", () => {
        const str = "333";
        expect(stringUnshift(stringShift(str))).toBe(str);
    });
    it("regular string, shift is string with number in the begining", () => {
        const str = "333";
        const shift = "1ab"; 
        expect(stringShift(str, shift)).toBe("444");
        expect(stringUnshift(stringShift(str, shift), shift)).toBe(str);
    });
    it("regular string, shift is null", () => {
        const str = "333";
        const shift = null; 
        expect(stringShift(str, shift)).toBe("333");
        expect(stringUnshift(stringShift(str, shift), shift)).toBe(str);
    });
});