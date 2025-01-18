import { OptionData } from "@/mock/pageData";
import s from "./BarGraph.module.scss";

interface BarGraphProps {
  optionDatas: OptionData[];
  totalVolume: number;
}

export default function BarGraph({ optionDatas, totalVolume }: BarGraphProps) {
  if (optionDatas === undefined) {
    return <div>no data</div>;
  }
  const options = optionDatas.map((item) => {
    return item.name;
  });
  const volumes = optionDatas.map((item) => {
    return item.volume;
  });

  const calculateRatio = (volume: number) => {
    const ratio = (volume / totalVolume) * 100;
    console.log(ratio);
    return { height: `${ratio}%` };
  };

  return (
    <div className={s.graphContainer}>
      <div className={s.barContainer}>
        {volumes.map((volume, idx) => (
          <div className={s.bar} key={idx} style={calculateRatio(volume)} />
        ))}
      </div>
      <div className={s.bottomLine} />
      <div className={s.legendContainer}>
        {options.map((option, idx) => (
          <div className={s.legend} key={idx}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
