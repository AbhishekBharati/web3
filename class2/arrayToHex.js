function arrayToHex(byteArray) {
  let hexString = "";
  for (let i = 0; i < byteArray.length; i++) {
    hexString += byteArray[i].toString(16).padStart(2, '0');
  }
  return hexString;
}

// This .padStart(2,'0'); ensures that a hexdecimal string is 2 characters long let's say the number is 00001111 --> it'll
// give 'f' but instead of 'f' it will represent '0f';

const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
let byteString = "";
for (let i = 0; i < byteArray.length; i++) {
  byteString += byteArray[i].toString(2).padStart(8, '0');
  byteString += " ";
}
console.log(byteString);
const hexString = arrayToHex(byteArray);
console.log(hexString);

