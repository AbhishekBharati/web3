const crypto = require("crypto");

function findHashWithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputStr = input.toString();
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if (hash.startsWith(prefix)) {
      return {
        input: inputStr,
        hash: hash
      }
    }
    input++;
  }
}

const result = findHashWithPrefix('0000000000');
console.log(result);
