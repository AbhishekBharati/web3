function ascciToBytes(asciiString) {
  const byteArray = [];
  for (let i = 0; i < asciiString.length; i++) {
    byteArray.push(asciiString.charCodeAt(i));
  }
  return byteArray;
}

// Pretty straight forward code to extract the corresponding Ascii value of the characters in the string.

const ascii = "Hello";
const byteArray = ascciToBytes(ascii);
console.log(byteArray);
