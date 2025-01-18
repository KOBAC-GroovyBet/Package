export interface MainPageData {
  id: number;
  title: string;
  volume: string;
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
  options: OptionData[];
  like: boolean;
}

export type DetailPageDatas = DetailPageData[];

export const mainPage = [
  { id: 1, title: "Yoon arrested by January 31?", volume: "21,000,000" },
  {
    id: 2,
    title: "TikTok banned in the US before May 2025?",
    volume: "1,750,000",
  },
  {
    id: 3,
    title: "Israel x Hamas ceasefire by January 31?",
    volume: "495,000,000",
  },
  {
    id: 4,
    title: "What price will Bitcoin hit in January?",
    volume: "9,000,000",
  },
  { id: 5, title: "Elon Musk # of tweets January 10-17?", volume: "12,000" },
  { id: 6, title: "Next President of Greece?", volume: "1,500,000" },
];

export const detailPage: DetailPageDatas = [
  {
    id: 1,
    title: "Yoon arrested by January 31?",
    volume: 21000000,
    options: [
      { name: "Option1", volume: 11000000 },
      { name: "Option2", volume: 10000000 },
    ],
    like: true,
  },
  {
    id: 2,
    title: "TikTok banned in the US before May 2025?",
    volume: 1750000,
    options: [
      { name: "Option1", volume: 50000 },
      { name: "Option2", volume: 170000 },
    ],
    like: false,
  },
  {
    id: 3,
    title: "Israel x Hamas ceasefire by January 31?",
    volume: 490000000,
    options: [
      { name: "Option1", volume: 90000000 },
      { name: "Option2", volume: 200000000 },
      { name: "Option3", volume: 200000000 },
    ],
    like: false,
  },
  {
    id: 4,
    title: "What price will Bitcoin hit in January?",
    volume: 9000000,
    options: [
      { name: "Option1", volume: 1000000 },
      { name: "Option2", volume: 6000000 },
      { name: "Option3", volume: 2000000 },
    ],
    like: true,
  },
  {
    id: 5,
    title: "Elon Musk # of tweets January 10-17?",
    volume: 9000000,
    options: [
      { name: "Option1", volume: 1000000 },
      { name: "Option2", volume: 6000000 },
      { name: "Option3", volume: 2000000 },
    ],
    like: true,
  },
  {
    id: 6,
    title: "Next President of Greece?",
    volume: 9000000,
    options: [
      { name: "Option1", volume: 1000000 },
      { name: "Option2", volume: 6000000 },
      { name: "Option3", volume: 2000000 },
    ],
    like: false,
  },
];
