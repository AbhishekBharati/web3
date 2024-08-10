function bytesToAscii(byteArray) {
  const textDecoder = new TextDecoder();
  const asciiString = textDecoder.decode(byteArray);
  return asciiString;
}

const bytes = new Uint8Array([72, 101, 108, 108, 111]);
const asciiString = bytesToAscii(bytes);
console.log(asciiString);
