"use client";

import { detailPage, DetailPageData } from "@/mock/pageData";
import { useEffect, useState } from "react";
import s from "./DetailPage.module.scss";
import Image from "next/image";
import BarGraph from "@/components/Graphs/BarGraph";
import Option from "@/components/DetailPage/Option";
import { useWallet } from "@/app/Walletcontext";

interface DetailParam {
  id: number;
}

export default function EventDetails({ id }: DetailParam) {
  const [data, setData] = useState<DetailPageData>();
  const [like, setLike] = useState<boolean>(false);
  const {walletAddress} = useWallet()

  useEffect(() => {
    console.log(id);
    const preprocessedData = detailPage;
    preprocessedData.filter((item) => {
      return item.id === id;
    });
    setData(preprocessedData[0]);
    if (data) setLike(data.like);
    console.log(data);
  }, [id, data]);

  const handleLike = () => {
    setLike(!like);
  };

  if (data === undefined) {
    return <div>Network Error</div>;
  }

  return (
    <div className={s.pageContainer}>
      <div className={s.menuSection}>
        <div className={s.titleContainer}>{data.title}</div>
        <div className={s.connectWallet}>
         {walletAddress? `Hello, ${walletAddress}` : "Please Connect Your Wallet First!"} 
        </div>
      </div>
      <div className={s.content}>
        <div className={s.imageSection}>
          <div className={s.image}>Image</div>
          <div className={s.details}>
            {like ? (
              <Image
                src={"/heartSelected.svg"}
                width={32}
                height={32}
                alt=""
                onClick={handleLike}
              />
            ) : (
              <Image
                src={"/heart.svg"}
                width={32}
                height={32}
                alt=""
                onClick={handleLike}
              />
            )}
            <div className={s.volume}>
              {data?.volume.toLocaleString("en-US")} volume
            </div>
          </div>
          <BarGraph optionDatas={data.options} totalVolume={data.volume} />
        </div>
        <div className={s.selectSection}>
          <Option options={data.options} />
        </div>
      </div>
    </div>
  );
}
