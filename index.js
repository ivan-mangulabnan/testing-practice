export function capitalize (string) {
  return Array.from(string)
    .map((str, index) => { 
      if (index === 0) return str.toUpperCase();
      return str;
    })
    .join('');
}