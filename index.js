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