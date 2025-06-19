export function capitalize (string) {
  return Array.from(string)
    .map((str, index) => { 
      if (index === 0) return str.toUpperCase();
      return str;
    })
    .join('');
}

export function reverseString(string) {
  return Array.from(string).reverse().join('');
}

export const calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  division: function(num1, num2) {
    return num1 / num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  }
}

export function caesarCipher (str, key) {
  const mainArr = Array.from('abcdefghijklmnopqrstuvwxyz');

  let mapped = Array.from(str).map(char => {
    let regex = /[a-zA-Z]/;
    if (regex.test(char)) {
      let newChar = char.toLowerCase();
      const index = (mainArr.indexOf(newChar) + key) % mainArr.length;
      return char === char.toUpperCase() ? mainArr[index].toUpperCase() : mainArr[index];
    }
    return char;
  })

  return mapped.join('');
}

export function analyzeArray (arr) {
  let sort = arr.sort((a, b) => a - b);
  let average, min, max, length;
  average = arr.reduce((total, curr) => total + curr, 0) / arr.length;
  min = sort[0];
  max = sort[arr.length - 1];
  length = arr.length;
  return { average: average, min, max, length };
}