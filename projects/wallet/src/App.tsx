import { useState } from "react"
import { generateMnemonic } from "bip39";
import './App.css';
import { SolanaWallet } from "./SolanaWallet";
import { EthereumWallet } from "./EthereumWallet";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <button onClick={async () => {
        const mn = await generateMnemonic();
        setMnemonic(mn);
      }}>Generate Mnemonic</button>
      <h4>{mnemonic}</h4>
      <SolanaWallet mnemonic={mnemonic} />
      <EthereumWallet mnemonic={mnemonic} />
    </>
  )
}

export default App
