import { describe, it, expect, test } from "vitest";
import { getOccurencesObject } from "../objects.mjs";
describe("getOccurencesObject", () => {
    it("string abcadab", () => {
        expect(getOccurencesObject("abcadab")).toEqual({3:"a", 2:"b", 1:"cd"})
    });
});
