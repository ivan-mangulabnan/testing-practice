import { capitalize, reverseString } from "./index.js";

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
})