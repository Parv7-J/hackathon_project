"use client";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function Page() {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [balance, setBalance] = useState("0");
  const [email, setEmail] = useState("");

  function handleClick() {}

  useEffect(() => {
    async function createProvider() {
      if (!window.ethereum) {
        console.log("Please install MetaMask!");
        return;
      }

      try {
        // 1. Connect to MetaMask
        const browserProvider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await browserProvider.send("eth_requestAccounts", []);
        // 2. Use Alchemy/Infura as fallback (recommended)
        // Using a public Holesky RPC
        const holeskyProvider = new ethers.JsonRpcProvider(
          "https://holesky.rpc.thirdweb.com"
        );
        const holeskySigner = await holeskyProvider.getSigner();

        // 3. Get balance
        const blc = await holeskyProvider.getBalance(
          "0x56Aa82243667135Ab7C48cD7214C8A91E07Aa318"
        );
        setProvider(holeskyProvider);
        setSigner(holeskySigner);
        setBalance(ethers.formatEther(b));
      } catch (error) {
        console.error("Error:", error);
      }
    }

    createProvider();
  }, []);

  return (
    <div>
      <div>{provider ? `Balance: ${balance} ETH` : "Connect MetaMask"}</div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => handleClick(email)}>Submit</button>
    </div>
  );
}
