function hexToArray(hexString) {
  const byteArray = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
  }
  return byteArray;
}

// So here the core logic is in parseInt we are passing hexDecimal String and 16 (which says that the string is hexadecimal)
// and .substr(i*2,2) Here i*2 calculates the starting position of the string and second 2 says that we need 2 strings from that posn;

const hex = "48656c6c6f";
const bytes = hexToArray(hex);
console.log(bytes);
