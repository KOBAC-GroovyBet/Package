"use client";

import { SortType } from "@/app/page";
import s from "./Category.module.scss";

interface CategoryProps {
  category: string;
  selected: SortType;
  onClick: () => void;
}

export default function Category({
  category,
  selected,
  onClick,
}: CategoryProps) {
  return (
    <div
      className={`${s.categoryContainer} ${
        category == selected ? s.selected : ""
      }`}
      onClick={onClick}
    >
      <p className={`${s.content} ${category == selected ? s.selected : ""}`}>
        {category}
      </p>
    </div>
  );
}
