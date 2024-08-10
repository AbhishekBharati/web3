import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate a new KeyPair :-
const keyPair = Keypair.generate();

// Extract the Public and Private Key :-
const publicKey = keyPair.publicKey.toString();
const pvtKey = keyPair.secretKey;

// Display the keys :-
console.log("Public Key:", publicKey);
console.log("Private Key : ", pvtKey);

// Conver the message "hello world" to a Uint8Array :
const message = new TextEncoder().encode("hello World");

const signature = nacl.sign.detached(message, pvtKey);
const result = nacl.sign.detached.verify(message, signature, keyPair.publicKey.toBytes());

console.log(result);


// Here none of the tasks is occuring asynchronously
