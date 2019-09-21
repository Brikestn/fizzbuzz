const FizzBuzz = require("./fizzbuzz");

describe("Test Fizzbuzz", () => {
  test("Test 1 expect 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1);
  });
});
