import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { Buffer } from "buffer";
import nacl from "tweetnacl";

interface solanaWalletParams {
  mnemonic: string;
}

export const SolanaWallet = ({ mnemonic }: solanaWalletParams) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [publicKeys, setPublicKeys] = useState<string[]>([]);

  const handleAddWallet = async () => {
    try {
      const seed: Buffer = await mnemonicToSeed(mnemonic);
      const path = `m/44'/501'/${currentIndex}'/0'`;
      const derivedSeed: Uint8Array = derivePath(path, Buffer.from(seed).toString("hex")).key;
      const secret: Uint8Array = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      const keyPair = Keypair.fromSecretKey(secret);
      setCurrentIndex(currentIndex + 1);
      setPublicKeys([...publicKeys, keyPair.publicKey.toBase58()]);

    } catch (err) {
      console.log(err);
      alert('Something went wrong');
    }
  }

  return (
    <div>
      <button onClick={handleAddWallet}>
        Add Solana Wallet
      </button>
      {publicKeys.map(p => <div>{p}</div>)}
    </div>
  )
}

