const crypto = require("crypto");

function hashWithPrefixWithFixInput(inputStr, prefix) {
  let input = 0;
  while (true) {
    const inputs = input.toString();
    const newStr = inputStr + inputs;
    const hash = crypto.createHash('sha256').update(newStr).digest('hex');
    if (hash.startsWith(prefix)) {
      return {
        input: newStr,
        hash: hash
      }
    }
    input++;
  }
}

const result = hashWithPrefixWithFixInput('100xdevs', '00000');
console.log(result);
