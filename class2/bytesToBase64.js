const bytes = new Uint8Array([72, 101, 108, 108, 111]);
const base64URLencoded = Buffer.from(bytes).toString("base64");
console.log(base64URLencoded);
