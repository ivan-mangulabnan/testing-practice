import { capitalize, reverseString, calculator } from "./index.js";

describe("Capitalize function", () => {

  it("exists", () => {
    expect(capitalize).toBeTruthy();
  })

  it("returns the first letter capitalized", () => {
    const returnedValue = capitalize("ivan");
    expect(returnedValue).toBe('Ivan');
  })
})

describe("Reverse String function", () => {
  it("exists", () => {
    expect(reverseString).toBeTruthy();
  })

  it ("reverses string", () => {
    const somme = reverseString('somme');
    expect(typeof somme).toBe('string');
    expect(somme).toBe('emmos');
  })
})

describe("calculator", () => {
  test("if add works", () => {
    const sum1 = calculator.add(2, 2);
    expect(calculator.add).toBeTruthy();
    expect(sum1).toBe(4);
  })
})