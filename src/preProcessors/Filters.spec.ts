import { Filters } from "./Filters";

describe("Filters", () => {
    let filters: Filters;
    beforeEach(() => {
        filters = new Filters();

    });

    it("should return 1 when given an array of 2 duplicates", () => {
        const inputArray = ["hello", "hello"];
        expect(Filters.removeArrayDuplicates(inputArray).length).toEqual(1);
    });

    it("should return 2 when given an array of 2 different items", () => {
        const inputArray = ["hello", "goodbye"];
        expect(Filters.removeArrayDuplicates(inputArray).length).toEqual(2);
    });

    it("should return the item property name", () => {
        const inputArray = [{property1 : "hello"}];
        expect(Filters.getIndividualProperty(inputArray, "property1")).toEqual(["hello"]);
    });

    it("should return the item property name when there are a few properties", () => {
        const inputArray = [
            {property1 : "hello"},
            {property1 : "hello"},
            {property2 : "bye"}
        ];
        expect(Filters.getIndividualProperty(inputArray, "property1")).toEqual(["hello", "hello", undefined]);
    });
});
