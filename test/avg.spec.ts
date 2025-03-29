import { avg } from "../src/calculate_functions";

describe("avg", () => {
  it("avg of [1, 2, 3, 4, 5] should be 3", () => {
    expect(avg([1, 2, 3, 4, 5])).toBe(3);
  });

  it("avg of [-1, -2, -3, -4, -5] should be -3", () => {
    expect(avg([-1, -2, -3, -4, -5])).toBe(-3);
  });

  it("avg of [0.1, 0.2, 0.3, 0.4, 0.5] should be 0.3", () => {
    expect(avg([0.1, 0.2, 0.3, 0.4, 0.5])).toBeCloseTo(0.3);
  });

  it("avg of an empty list should be NaN", () => {
    expect(avg([])).toBe(NaN);
  });

  it("avg of a single-element list [42] should be 42", () => {
    expect(avg([42])).toBe(42);
  });

  it("avg of a list with mixed positive and negative numbers [-10, 0, 10] should be 0", () => {
    expect(avg([-10, 0, 10])).toBe(0);
  });

  it("avg of a list with very large numbers [1e10, 1e10, 1e10] should be 1e10", () => {
    expect(avg([1e10, 1e10, 1e10])).toBe(1e10);
  });
});
