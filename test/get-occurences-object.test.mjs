import { describe, it, expect, test } from "vitest";
import { getOccurencesObject } from "../objects.mjs";
test("string abcadab", () => {
    let a, b, c, d;
    ({a, b, c, d} = getOccurencesObject("abcadab"));
    expect(a).toBe(3);
    expect(b).toBe(2);
    expect(c).toBe(1);
    expect(d).toBe(1);
});