import { useState } from "react";
import s from "./Option.module.scss";
import { OptionData } from "@/mock/pageData";
import AddCartSection from "./AddCartSection";

interface OptionProps {
  options: OptionData[];
}

export default function Option({ options }: OptionProps) {
  const [optionSelect, setOptionSelect] = useState<number | undefined>();

  const buttonHeight = 60 / options.length;

  function selectOption(idx: number) {
    if (idx == optionSelect) {
      setOptionSelect(undefined);
    } else {
      setOptionSelect(idx);
    }
  }

  const resetOptionSelect = () => {
    setOptionSelect(undefined);
    console.log(optionSelect);
  };

  return (
    <div className={s.optionSection}>
      <div className={s.options}>
        {options.map((option, idx) => (
          <div
            className={`${s.option} ${optionSelect === idx ? s.select : ""}`}
            key={idx}
            style={{ height: `${buttonHeight}%` }}
            onClick={() => selectOption(idx)}
          >
            {option.name}
          </div>
        ))}
      </div>
      <AddCartSection
        options={options}
        selectedOptionID={optionSelect}
        resetOptionState={resetOptionSelect}
      />
    </div>
  );
}
