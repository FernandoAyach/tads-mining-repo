import { max } from "../src/calculate_functions";

describe("max", () => {
  it("max of [1, 2, 3, 4, 5] should be 1", () => {
    expect(max([1, 2, 3, 4, 5])).toBe(5);
  });

  it("max of [-1, -2, -3, -4, -5] should be -5", () => {
    expect(max([-1, -2, -3, -4, -5])).toBe(-1);
  });

  it("max of [0.1, 0.2, 0.3, 0.4, 0.5] should be 0.5", () => {
    expect(max([0.1, 0.2, 0.3, 0.4, 0.5])).toBeCloseTo(0.5);
  });

  it("max of an empty list should be NaN", () => {
    expect(max([])).toBe(NaN);
  });

  it("max of a single-element list [42] should be 42", () => {
    expect(max([42])).toBe(42);
  });

  it("max of a list with mixed positive and negative numbers [-10, 0, 10] should be 10", () => {
    expect(max([-10, 0, 10])).toBe(10);
  });

  it("avg of a list with very large numbers [1e13, 1e8, 1e19] should be 1e19", () => {
    expect(max([1e13, 1e8, 1e19])).toBe(1e19);
  });
});
