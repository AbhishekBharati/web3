import { webcrypto as crypto } from "crypto";
if (!globalThis.crypto) {
  globalThis.crypto = crypto;
}

import * as secp from "@noble/secp256k1";

async function main() {
  const privKey = secp.utils.randomPrivateKey(); //Secure random Private Key
  // Sha 256 of "Hello World"
  const msgHash = "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";

  const pubKey = secp.getPublicKey(privKey);
  const signature = await secp.signAsync(msgHash, privKey);
  const isValid = secp.verify(signature, msgHash, pubKey);
  console.log(isValid);
}

main();
