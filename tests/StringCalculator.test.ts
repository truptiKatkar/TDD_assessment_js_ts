import { add } from "../src/StringCalculator";


describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number itself if there is only one number', () => {
    expect(add("1")).toBe(1);
  });

});
