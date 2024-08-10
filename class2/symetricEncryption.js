const crypto = require("crypto");

//Generating a Random Encryption Key and IV (initializatiton vector);
const key = crypto.randomBytes(32); // Will generate a random 32 bytes => 256 bits;
const iv = crypto.randomBytes(16); // Will genrate a random 16 Bytes => 128 bits;

function encrypt(text) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

//Example 
const textToEncrypt = "Hello, WOrld!";
const encryptedText = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedText);

console.log(`Orignal Text :- ${textToEncrypt}`);
console.log(`Encrypted Text :- ${encryptedText}`);
console.log(`Decrypted Text :- ${decryptedText}`);
