"use client";

import Link from "next/link";
import Image from "next/image";
import s from "./layout.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IAdapter, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";

import RPC from "./ethersRPC" ;


const clientId = "BORLcg7MniYpQ8QT4cJdMHYfJAvmi_TbaAZbP4WYvCW_cnG9MhUs5SSPXnjiX1MAQvTZT4jVUkzToPCIsTFK-L8";

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

const web3AuthOptions: Web3AuthOptions = {
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
};

const web3auth = new Web3Auth(web3AuthOptions);


export default function Navbar() {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.initModal();
        if (web3auth.connected) {
          setProvider(web3auth.provider);
          setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    try {
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
      setLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await web3auth.logout();
      setProvider(null);
      setLoggedIn(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  
  

  return (
    <nav className={s.topBar}>
      <Link href={"/"} className={s.logo}>
        <Image
          src={"/groovybetLogo.png"}
          height={66}
          width={48}
          alt="logo"
          priority
        />
      </Link>
      <div className={s.searchSection}>
        <input className={s.search} placeholder="Search Events" />
        <Image
          className={s.searchIcon}
          src={"/search.svg"}
          height={32}
          width={32}
          alt="search"
        />
      </div>
      <div className={s.buttonSection}>
        <Link
          className={`${s.navContent} ${
            pathName.includes("temporaryportfolio") ? s.active : ""
          }`}
          href={"/temporaryportfolio"}
        >
          Temporary Portfolio
        </Link>
        <Link
          className={`${s.navContent} ${
            pathName.includes("mypage") ? s.active : ""
          }`}
          href={"/mypage"}
        >
          My Page
        </Link>
      </div>

      {/* 로그인 상태에 따라 다른 버튼 렌더링 */}
      {loggedIn ? (
        <>
         
          
          <button onClick={logout} className={s.connectWallet}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={login} className={s.connectWallet}>
          Connect Wallet
        </button>
      )}
    </nav>
  );
}
