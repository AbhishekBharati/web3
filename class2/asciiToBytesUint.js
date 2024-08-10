function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

const ascii = "Hello";
const bytes = asciiToBytes(ascii);
console.log(bytes);
