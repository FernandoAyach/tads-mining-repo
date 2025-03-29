import { median } from "../src/calculate_functions";

describe("median", () => {

  it("median of [1, 2, 3, 4, 5] should be 3", () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
  });

  it("median of [1, 2, 3, 4, 5, 6] should be 3.5", () => {
    expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });

  it("median of [-5, -4, -3, -2, -1] should be -3", () => {
    expect(median([-5, -4, -3, -2, -1])).toBe(-3);
  });

  it("median of [0.1, 0.2, 0.3, 0.4, 0.5] should be 0.3", () => {
    expect(median([0.1, 0.2, 0.3, 0.4, 0.5])).toBeCloseTo(0.3);
  });

  it("median of an empty list should be NaN", () => {
    expect(median([])).toBe(NaN);
  });

  it("median of a single-element list [42] should be 42", () => {
    expect(median([42])).toBe(42);
  });

  it("median of [10, 2, 38, 23, 38, 23, 21] should be 23 (unsorted input)", () => {
    expect(median([10, 2, 38, 23, 38, 23, 21])).toBe(23);
  });

  it("median of [-10, 0, 10, 20] should be 5", () => {
    expect(median([-10, 0, 10, 20])).toBe(5);
  });
});
