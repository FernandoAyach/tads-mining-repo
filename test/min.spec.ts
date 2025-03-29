import { min } from "../src/calculate_functions";

describe("min", () => {
  it("min of [1, 2, 3, 4, 5] should be 1", () => {
    expect(min([1, 2, 3, 4, 5])).toBe(1);
  });

  it("min of [-1, -2, -3, -4, -5] should be -5", () => {
    expect(min([-1, -2, -3, -4, -5])).toBe(-5);
  });

  it("min of [0.1, 0.2, 0.3, 0.4, 0.5] should be 0.1", () => {
    expect(min([0.1, 0.2, 0.3, 0.4, 0.5])).toBeCloseTo(0.1);
  });

  it("min of an empty list should be NaN", () => {
    expect(min([])).toBe(NaN);
  });

  it("min of a single-element list [42] should be 42", () => {
    expect(min([42])).toBe(42);
  });

  it("min of a list with mixed positive and negative numbers [-10, 0, 10] should be -10", () => {
    expect(min([-10, 0, 10])).toBe(-10);
  });

  it("avg of a list with very large numbers [1e13, 1e8, 1e19] should be 1e8", () => {
    expect(min([1e13, 1e8, 1e19])).toBe(1e8);
  });
});
