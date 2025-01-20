"use client";

import Link from "next/link";
import Image from "next/image";
import s from "./layout.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";
import { IProvider, IAdapter } from "@web3auth/base";

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
  const pathName = usePathname();

  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const adapters = await getDefaultExternalAdapters({ options: web3AuthOptions });
        adapters.forEach((adapter: IAdapter<unknown>) => {
          web3auth.configureAdapter(adapter);
        });
        await web3auth.initModal();
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error("Initialization error:", error);
      }
    };

    init();
  }, []);

  const login = async () => {
    try {
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
      if (web3auth.connected) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const getUserInfo = async() => {
    const user = await web3auth.getUserInfo();
    uiConsole(user);
  };

  const logout = async () => {
    try {
      await web3auth.logout();
      setProvider(null);
      setLoggedIn(false);
      uiConsole("logged out");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  function uiConsole(...args: any[]): void {
    const el = document.querySelector("#console>p");
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
      console.log(...args);
    }
   
  }

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
          className={`${s.navContent} ${pathName.includes("temporaryportfolio") ? s.active : ""}`}
          href={"/temporaryportfolio"}
        >
          {pathName.includes("temporaryportfolio") ? (
            <Image
              src={"/portfolioInProgressSelected.svg"}
              height={28}
              width={28}
              alt="icon"
            />
          ) : (
            <Image
              src={"/portfolioInProgress.svg"}
              height={28}
              width={28}
              alt="icon"
            />
          )}
          <p
            className={`${s.portfolioInProgressDescription} ${
              pathName.includes("temporaryportfolio") ? s.active : ""
            }`}
          >
            Temporary Portfolio
          </p>
        </Link>
        <Link
          className={`${s.navContent} ${pathName.includes("mypage") ? s.active : ""}`}
          href={"/mypage"}
        >
          {pathName.includes("mypage") ? (
            <Image
              src={"/myStatisticsSelected.svg"}
              height={28}
              width={28}
              alt="icon"
            />
          ) : (
            <Image
              src={"/myStatistics.svg"}
              height={28}
              width={28}
              alt="icon"
            />
          )}
          <p
            className={`${s.myPageDescription} ${pathName.includes("mypage") ? s.active : ""}`}
          >
            My Page
          </p>
        </Link>
      </div>
      <button
        className={s.connectWallet}
        onClick={loggedIn ? logout : login}
      >
        {loggedIn ? "Logout" : "Connect Wallet"}
      </button>
    </nav>
  );
}
