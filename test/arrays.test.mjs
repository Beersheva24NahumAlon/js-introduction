import { describe, it, expect, test } from "vitest";
describe("iterating elements in array", () => {
    it("printing out the elements using for-each", () => {
        const array = [1, 2, 3, 2, 4];
        array.forEach(element => console.log(element));
    });
    it("printing out the elements using for-in", () => {
        const array = [1, 2, 3, 2, 4];
        for (const index in array) {
            console.log(array[index]);
        }
    });
    it("printing out the elements using for-of", () => {
        const array = [1, 2, 3, 2, 4];
        for (const element of array) {
            console.log(element);
        }
    });
    it("printing out indexes and elements of array", () => {
        const array = [1, 2, 3, 2, 4];
        array.forEach((element, index) => console.log(`${index}: ${element}`));
    });
});