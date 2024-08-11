import { ethers } from "ethers";

// Generate a Random Wallet :-
const wallet = ethers.Wallet.createRandom();

// Extract the public and private Keys :-
const publicKey = wallet.address;
const privateKey = wallet.privateKey;

console.log("Public Key Address :- ", publicKey);
console.log("Private Key : ", privateKey);

// Message to Sign :-
const message = "Hello World";

// Sign the message using the walllet's Private Key :-
const signature = await wallet.signMessage(message);
console.log("Signature ", signature);

// Verify the Signature :-
const recoveredAddress = ethers.verifyMessage(message, signature);

console.log("Recovered Address :- ", recoveredAddress);
console.log("Signature is Valid :- ", recoveredAddress === publicKey);

