import { add } from "../src/StringCalculator";


describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number itself if there is only one number', () => {
    expect(add("1")).toBe(1);
  });

  it('should return the sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  it('should handle any number of comma-separated numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  it('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it('should support different delimiters specified at the start', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  it('should show all negative numbers in the exception message', () => {
    expect(() => add("1,-2,-3,4")).toThrow("negative numbers not allowed: -2, -3");
  });
});
