import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index.js";

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

  test("if subtract method works", () => {
    const diff = calculator.subtract(10, 5);
    expect(calculator.subtract).toBeTruthy();
    expect(diff).toBe(5);
  })

  test("if division method works", () => {
    const div = calculator.division(10, 5);
    expect(calculator.division).toBeTruthy();
    expect(div).toBe(2);
  })

  test("if multiply method works", () => {
    const prod = calculator.multiply(10, 5);
    expect(calculator.multiply).toBeTruthy();
    expect(prod).toBe(50);
  })
})

describe("caesarCipher", () => {
  test("if caesarCipher exists", () => {
    expect(caesarCipher).toBeTruthy();
  })

  test("If caesarCipher works as intended", () => {
    const result = caesarCipher('xyz', 3);
    expect(result).toBe('abc');
    
    const result1 = caesarCipher('HeLLo', 3);
    expect(result1).toBe('KhOOr');

    const result2 = caesarCipher('Hello, World!', 3);
    expect(result2).toBe('Khoor, Zruog!');
  })
})

describe("analyzeArray function", () => {
  test("exists", () => {
    expect(analyzeArray).toBeTruthy();
  })
})