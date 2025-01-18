"use client";

import { useWallet } from "@/components/walletcontext";
import { Web3Auth } from "@web3auth/modal";
import { ethers } from "ethers";
import s from "./layout.module.scss"; // 스타일링 파일

export default function ConnectWallet() {
  const { account, setAccount } = useWallet();
  const clientId = "BLjtLImOLWbFBpbVDYkCQ0BWbPN7ZOFTVyMLSgXPHY03S39jnov4Ga7eR1KJSdX62ZRyhLy5nfHVkhO3I6h8aJc"; // Web3Auth 대시보드에서 발급받은 Client ID

  const connectWallet = async () => {
    try {
      

      // Web3Auth 초기화
      const web3auth = new Web3Auth({
        clientId,
        chainConfig: {
          chainNamespace: "eip155",
          chainId: "0x1", // Ethereum Mainnet
           // Infura RPC URL
        },
      });

      await web3auth.initModal(); // Web3Auth 모달 초기화
      
      const provider = await web3auth.connect(); // 모달을 통해 로그인

      // ethers.js와 BrowserProvider 연결
      const ethersProvider = new ethers.BrowserProvider(provider as any); // BrowserProvider 유지
      const signer = await ethersProvider.getSigner(); // Signer 가져오기
      const address = await signer.getAddress(); // 지갑 주소 가져오기

      setAccount(address); // WalletContext에 상태 저장
    } catch (error) {
      console.error("지갑 연결 실패:", error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null); // 로그아웃 시 상태 초기화
  };

  return (
    <div className={s.walletSection}>
      {account ? (
        <div>
          <p>Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
          <button onClick={disconnectWallet} className={s.logoutButton}>
            Log Out
          </button>
        </div>
      ) : (
        <button onClick={connectWallet} className={s.connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}
