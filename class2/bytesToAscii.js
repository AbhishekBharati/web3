function bytesToAscii(byteArray) {
  return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

// Alright in this code only one new jargon String.fromCharCode(); 
// This method of String object takes a number(byte) as a Input and gives the corresponding ASCII Value.


const bytes = [72, 101, 108, 108, 111];
const asciiString = bytesToAscii(bytes);
console.log(asciiString);
