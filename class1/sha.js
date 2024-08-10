const crypto = require("crypto");

const input = "100xdevs";
// sha256 stands for the algorithm's name is sha and it's returning a 256 bits value but coz we are demanding it in hex 
// we get 256/4 => 64 bits.
const hash = crypto.createHash('sha256').update(input).digest('hex');
// We are hashing the input using crypto library and here hex means we are demanding the hashing in hexadecimal format.

console.log(hash);
