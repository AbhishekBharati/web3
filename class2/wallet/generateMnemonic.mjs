import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

// Generate a 12 word Mnemonic :-
const mnemonic = generateMnemonic();
console.log('Generated Mnemonic :- ', mnemonic);
const seed = mnemonicToSeedSync(mnemonic);
console.log(seed);
for (let i = 0; i < 4; i++) {
  const path = `m/44'/60'/${i}'/0'`; // This is derivation Path.
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  console.log("Derived Seed", derivedSeed);
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log("Secret Key", secret);
  // Ig most probably the next line will display the publicKey that we can share in base58 format.
  console.log("publicKey", Keypair.fromSecretKey(secret).publicKey.toBase58());
}
