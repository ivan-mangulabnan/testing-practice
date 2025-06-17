import { capitalize } from "./index.js";

describe("Capitalize function", () => {

  it("exists", () => {
    expect(capitalize).toBeTruthy();
  })

  it("returns the first letter capitalized", () => {
    const returnedValue = capitalize("ivan");
    expect(returnedValue).toBe('Ivan');
  })
})