"use client";

import { useEffect, useState } from "react";
import s from "./page.module.scss";
import Category from "@/components/Category/Category";
import Image from "next/image";
import Link from "next/link";
import { mainPage, MainPageDatas } from "@/mock/pageData";
import { useWallet } from "@/components/walletcontext";

export type SortType = "Top" | "Trending" | "New" | "All";

export default function Home() {
  const [selected, setSelected] = useState<SortType>("Top");
  const [data, setData] = useState<MainPageDatas>();

  // Wallet 상태 가져오기
  const { account } = useWallet();

  useEffect(() => {
    setData(mainPage);
  }, []);

  const selectAll = () => {
    setSelected("All");
  };

  const selectTop = () => {
    setSelected("Top");
  };

  const selectNew = () => {
    setSelected("New");
  };

  const selectTrending = () => {
    setSelected("Trending");
  };

  console.log(selected);

  return (
    <div className={s.mainPage}>
      {/* 카테고리 섹션 */}
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

        {/* 지갑 상태 메시지 섹션 */}
        <div className={s.walletInfo}>
          {account ? (
            <p className={s.connectedMessage}>
              Welcome, <strong>{account.slice(0, 6)}...{account.slice(-4)}</strong>
            </p>
          ) : (
            <p className={s.disconnectedMessage}>Please Connect Your Wallet First!</p>
          )}
        </div>
      </div>

      {/* 콘텐츠 섹션 */}
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
