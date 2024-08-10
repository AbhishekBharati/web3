const bs58 = require("bs58");

function bytesToBase58(byteArray) {
  return bs58.default.encode(byteArray);
}


const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
const base58Encoded = bytesToBase58(byteArray);
console.log(base58Encoded);
