// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word", () => {
    const word = "racecar";
    expect(isPalindrome(word)).toBe(true);
  });

  it("returns false for a non-palindrome word", () => {
    const word = "car";
    expect(isPalindrome(word)).toBe(false);
  });

  it("returns true for a mixed case palindrome", () => {
    const word = "RaceCar";
    expect(isPalindrome(word)).toBe(true);
  });

  it("returns false for an empty string", () => {
    const word = "";
    expect(isPalindrome(word)).toBe(false);
  });

  it("throws an error for non-alphabetic characters", () => {
    const word = "racecar123";
    expect(() => isPalindrome(word)).toThrow("Input must only contain alphabetic characters.");
  });

  it("throws an error for non-string input", () => {
    const word = 1234;
    expect(() => isPalindrome(word)).toThrow("Input must be a string.");
  });
});
