"use client";

import { useEffect, useState } from "react";
import s from "./page.module.scss";
import Category from "@/components/Category/Category";
import Image from "next/image";
import Link from "next/link";
import { mainPage, MainPageDatas } from "@/mock/pageData";
import RPC from "@/components/ethersRPC"; // RPC import 추가
import { Web3Auth } from "@web3auth/modal";
import { WEB3AUTH_NETWORK, CHAIN_NAMESPACES } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";



export type SortType = "Top" | "Trending" | "New" | "All";

export default function Home() {
  const [selected, setSelected] = useState<SortType>("Top");
  const [data, setData] = useState<MainPageDatas>();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    setData(mainPage);

    // Web3Auth 초기화 및 상태 복구
    const chainConfig = {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: "0x1",
      rpcTarget: "https://rpc.ankr.com/eth",
      displayName: "Ethereum Mainnet",
      blockExplorerUrl: "https://etherscan.io",
      ticker: "ETH",
      tickerName: "Ethereum",
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    };

    const privateKeyProvider = new EthereumPrivateKeyProvider({
      config: { chainConfig },
    });
    
    const checkWalletStatus = async () => {
      const web3auth = new Web3Auth({
        clientId: "BORLcg7MniYpQ8QT4cJdMHYfJAvmi_TbaAZbP4WYvCW_cnG9MhUs5SSPXnjiX1MAQvTZT4jVUkzToPCIsTFK-L8", // Web3Auth Client ID
        web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
        privateKeyProvider,
      });

      await web3auth.initModal();

      if (web3auth.connected) {
        const provider = web3auth.provider;
        if (provider) {
          const accounts = await RPC.getAccounts(provider);
          setWalletAddress(accounts[0]); // 지갑 주소 설정
        }
      }
    };

    checkWalletStatus();
  }, []);

  const selectAll = () => setSelected("All");
  const selectTop = () => setSelected("Top");
  const selectNew = () => setSelected("New");
  const selectTrending = () => setSelected("Trending");

  console.log(selected);

  return (
    <div className={s.mainPage}>
      <div className={s.menuSection}>
        <div className={s.menuContainer}>
          <Category category="Top" selected={selected} onClick={selectTop} />
          <Category
            category="Trending"
            selected={selected}
            onClick={selectTrending}
          />
          <Category category="New" selected={selected} onClick={selectNew} />
          <Category category="All" selected={selected} onClick={selectAll} />
        </div>

        {/* 지갑 상태에 따라 동적 메시지 표시 */}
        <div className={s.connectWallet}>
          {walletAddress
            ? `Hello, ${walletAddress}`
            : "Please Connect Your Wallet First!"}
        </div>
      </div>

      <div className={s.contentSection}>
        {data ? (
          data.map((item) => (
            <Link
              className={s.boxContainer}
              href={`/bettingdetails/${item.id}`}
              key={item.id}
            >
              <div className={s.imageSection}>image</div>
              <h3 className={s.title}>{item.title}</h3>
              <div className={s.boxTail}>
                <div className={s.activePart}>
                  <Image src={"/heart.svg"} width={24} height={24} alt="" />
                  <div className={s.betButton}>Go Bet</div>
                </div>
                <div className={s.volume}>
                  <p className={s.volumeTitle}>volume</p>
                  <p className={s.volumeTitle}>{item.volume}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>Network Error</div>
        )}
      </div>
    </div>
  );
}
