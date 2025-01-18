"use client";

import Image from "next/image";
import Link from "next/link";
import s from "./layout.module.scss";
import ConnectWallet from "@/components/connectwallet"; // ConnectWallet 컴포넌트 임포트
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className={s.topBar}>
      {/* 로고 섹션 */}
      <Link href="/" className={s.logoSection}>
        <Image
          src="/groovybetLogo.png"
          alt="GroovyBet Logo"
          width={48}
          height={48}
          priority
        />
      </Link>

      {/* 검색 섹션 */}
      <div className={s.searchSection}>
        <input className={s.search} placeholder="Search Events" />
        <Image
          className={s.searchIcon}
          src="/search.svg"
          alt="Search Icon"
          width={32}
          height={32}
        />
      </div>

      {/* 내비게이션 링크 섹션 */}
      <div className={s.buttonSection}>
        <Link
          className={`${s.navContent} ${
            pathName.includes("temporaryportfolio") ? s.active : ""
          }`}
          href="/temporaryportfolio"
        >
          {pathName.includes("temporaryportfolio") ? (
            <Image
              src="/portfolioInProgressSelected.svg"
              alt="Temporary Portfolio"
              width={28}
              height={28}
            />
          ) : (
            <Image
              src="/portfolioInProgress.svg"
              alt="Temporary Portfolio"
              width={28}
              height={28}
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
          className={`${s.navContent} ${
            pathName.includes("mypage") ? s.active : ""
          }`}
          href="/mypage"
        >
          {pathName.includes("mypage") ? (
            <Image
              src="/myStatisticsSelected.svg"
              alt="My Page"
              width={28}
              height={28}
            />
          ) : (
            <Image
              src="/myStatistics.svg"
              alt="My Page"
              width={28}
              height={28}
            />
          )}
          <p
            className={`${s.myPageDescription} ${
              pathName.includes("mypage") ? s.active : ""
            }`}
          >
            My Page
          </p>
        </Link>
      </div>

      {/* Connect Wallet / Log Out 섹션 */}
      <div className={s.walletSection}>
        <ConnectWallet />
      </div>
    </nav>
  );
}
