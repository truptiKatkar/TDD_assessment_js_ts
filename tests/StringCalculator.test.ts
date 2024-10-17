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

});
