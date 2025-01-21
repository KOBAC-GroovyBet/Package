"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineGraphProps {
  optionDatas: { name: string; volume: number }[];
}

const LineGraph = ({ optionDatas }: LineGraphProps) => {
  const labels = optionDatas.map((option) => option.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Volume",
        data: optionDatas.map((option) => option.volume),
        borderColor: "#16166d",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line data={data} options={options} style={{ width: '100%', height: '350px', marginTop: '100px' }} />;
};

export default LineGraph;
