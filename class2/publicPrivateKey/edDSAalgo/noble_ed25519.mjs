import { webcrypto as crypto } from "crypto";
if (!globalThis.crypto) {
  globalThis.crypto = crypto;
}

import * as ed from "@noble/ed25519";

async function main() {
  // Generate a Secure random Private Key :-
  const pvtKey = ed.utils.randomPrivateKey();

  // Convert the message "Hello World" to a Uint8Array.
  const message = new TextEncoder().encode("Hello World");

  // Generate the Public Key from the Private Key :-
  const pubKey = await ed.getPublicKeyAsync(pvtKey);

  // Sign the message :-
  const signature = await ed.signAsync(message, pvtKey);

  const fakeMsg = new TextEncoder().encode("Hatt mc");
  // Verify the Message :-
  const isValid = await ed.verifyAsync(signature, fakeMsg, pubKey);

  //Output the result
  console.log(isValid); //Should Print 'true' if the signature is valid;
}

main();
