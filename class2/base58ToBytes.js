const bs58 = require("bs58");

function bs58ToBytes(bs58String) {
  return bs58.default.decode(bs58String);
}

const bs58String = "9Ajdvzr";
const byteArray = bs58ToBytes(bs58String);
console.log(byteArray);
