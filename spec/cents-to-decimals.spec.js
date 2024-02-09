// spec/cents-to-decimals.spec.js

describe("function centsToDecimals", () => {
    it("Should convert value from cents to floating point number with 2 decimals", () => {
      expect(centsToDecimals(105)).toBe(1.05);
      expect(centsToDecimals(23)).toBe(0.23);
    });
    it("Should return undefined when the first argument passed is a string", () => {
        expect(centsToDecimals("")).toBe(undefined)
    })
    it("Should return 0 when the first argument is not passed", () => {
        expect(centsToDecimals(null)).toBe(0)
    })
  });
  
  