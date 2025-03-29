import { std } from "../src/calculate_functions";

describe("std", () => {
  it("std of [2, 4, 4, 4, 5, 5, 7, 9] should be 2", () => {
    expect(std([2, 4, 4, 4, 5, 5, 7, 9])).toBe(2);
  });

  it("std of [1, 1, 1, 1, 1] should be 0", () => {
    expect(std([1, 1, 1, 1, 1])).toBe(0);
  });

  it("std of [1, 2, 3, 4, 5] should be approximately 1.41", () => {
    expect(std([1, 2, 3, 4, 5])).toBeCloseTo(1.41, 2);
  });

  it("std of [-1, -2, -3, -4, -5] should be approximately 1.41", () => {
    expect(std([-1, -2, -3, -4, -5])).toBeCloseTo(1.41, 2);
  });

  it("std of [0.1, 0.2, 0.3, 0.4, 0.5] should be approximately 0.14", () => {
    expect(std([0.1, 0.2, 0.3, 0.4, 0.5])).toBeCloseTo(0.14, 2);
  });

  it("std of a single-element list [42] should be 0", () => {
    expect(std([42])).toBe(0);
  });

  it("std of an empty list should be NaN", () => {
    expect(std([])).toBe(NaN);
  });
});
