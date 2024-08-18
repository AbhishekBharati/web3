import { useState } from "react"
import { mnemonicToSeed } from "bip39"
import { Wallet, HDNodeWallet } from "ethers"

interface EthWalletParams {
  mnemonic: string
}
export const EthereumWallet = ({ mnemonic }: EthWalletParams) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [addresses, setAddresses] = useState<string[]>([]);

  const handleAddEthereum = async () => {
    const seed: Buffer = await mnemonicToSeed(mnemonic);
    const derivationPath: string = `m/44'/60'/${currentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);
    setCurrentIndex(currentIndex + 1);
    setAddresses([...addresses, wallet.address]);
  }

  return (
    <div>
      <button onClick={handleAddEthereum}>
        Add Ethereum Wallet
      </button>
      <b>{addresses.map(p => <div>{p}</div>)}</b>
    </div>
  )
}
