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