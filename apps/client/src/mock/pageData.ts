export interface MainPageData {
  id: number;
  title: string;
  volume: string;
  image: string;
}

export type MainPageDatas = MainPageData[];

export interface OptionData {
  name: string;
  volume: number;
}

export interface DetailPageData {
  id: number;
  title: string;
  volume: number;
  image: string;
  options: OptionData[];
  like: boolean;
  price: number;
}

export type DetailPageDatas = DetailPageData[];

export const mainPage = [
  {
    id: 1,
    title: "Yoon arrested by January 31?",
    volume: "21,000,000",
    image: "/yoon.webp",
  },
  {
    id: 2,
    title: "TikTok banned in the US before May 2025?",
    volume: "1,750,000",
    image: "/tiktok.webp",
  },
  {
    id: 3,
    title: "Israel x Hamas ceasefire by January 31?",
    volume: "495,000,000",
    image: "/israelhamas.jpg",
  },
  {
    id: 4,
    title: "What price will Bitcoin hit in January?",
    volume: "9,000,000",
    image: "/bitcoin.jpg",
  },
  {
    id: 5,
    title: "Elon Musk # of tweets January 10-17?",
    volume: "12,000",
    image: "/elonmusk.webp",
  },
  {
    id: 6,
    title: "Next President of Greece?",
    volume: "1,500,000",
    image: "/greece.jpg",
  },
  {
    id: 7,
    title: "Premier League Winner?",
    volume: "156,720,000",
    image: "/premierleague.jpg",
  },
  {
    id: 8,
    title: "Will DOGE hit 69¢ by Inauguration Day?",
    volume: "100,300,000",
    image: "/dogecoin.jpeg",
  },
];

export const detailPage: DetailPageDatas = [
  {
    id: 1,
    title: "Yoon arrested by January 31?",
    volume: 21000000,
    image: "/yoon.webp",
    options: [
      { name: "Option1", volume: 11000000 },
      { name: "Option2", volume: 10000000 },
      { name: "Option3", volume: 7000000 },
    ],
    like: true,
    price: 1,
  },
  {
    id: 2,
    title: "TikTok banned in the US before May 2025?",
    volume: 1750000,
    image: "/tiktok.webp",
    options: [
      { name: "Option1", volume: 50000 },
      { name: "Option2", volume: 170000 },
      { name: "Option3", volume: 1500000 },
    ],
    like: false,
    price: 0.8,
  },
  {
    id: 3,
    title: "Israel x Hamas ceasefire by January 31?",
    volume: 490000000,
    image: "/israelhamas.jpg",
    options: [
      { name: "Option1", volume: 90000000 },
      { name: "Option2", volume: 200000000 },
      { name: "Option3", volume: 200000000 },
    ],
    like: false,
    price: 0.2,
  },
  {
    id: 4,
    title: "What price will Bitcoin hit in January?",
    volume: 9000000,
    image: "/bitcoin.jpg",
    options: [
      { name: "Option1", volume: 1000000 },
      { name: "Option2", volume: 6000000 },
      { name: "Option3", volume: 2000000 },
    ],
    like: true,
    price: 0.4,
  },
  {
    id: 5,
    title: "Elon Musk # of tweets January 10-17?",
    volume: 12000,
    image: "/elonmusk.webp",
    options: [
      { name: "Option1", volume: 5000000 },
      { name: "Option2", volume: 2000000 },
      { name: "Option3", volume: 100000 },
    ],
    like: true,
    price: 1,
  },
  {
    id: 6,
    title: "Next President of Greece?",
    volume: 1500000,
    image: "/greece.jpg",
    options: [
      { name: "Option1", volume: 1000000 },
      { name: "Option2", volume: 3000000 },
      { name: "Option3", volume: 7000000 },
    ],
    like: false,
    price: 1,
  },
  {
    id: 7,
    title: "Premier League Winner?",
    volume: 156720000,
    image: "/premierleague.jpg",
    options: [
      { name: "Option1", volume: 15000000 },
      { name: "Option2", volume: 6000000 },
      { name: "Option3", volume: 1250000 },
    ],
    like: false,
    price: 0.7,
  },
  {
    id: 8,
    title: "Will DOGE hit 69¢ by Inauguration Day?",
    volume: 100300000,
    image: "/dogecoin.jpeg",
    options: [
      { name: "Option1", volume: 1500000 },
      { name: "Option2", volume: 7000000 },
      { name: "Option3", volume: 3400000 },
    ],
    like: true,
    price: 0.5,
  },
];
