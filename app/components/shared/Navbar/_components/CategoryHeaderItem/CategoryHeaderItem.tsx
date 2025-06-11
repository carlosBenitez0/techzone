"use client";
import styles from "./CategoryHeaderItem.module.css";
import { IoChevronDownSharp } from "react-icons/io5";

interface authGeneralStringProps {
  text: string;
  categoryActive: string;
  handleCategoryActive: (ctageorySelected: string) => void;
}

export const CategoryHeaderItem = ({
  text,
  categoryActive,
  handleCategoryActive,
}: authGeneralStringProps) => {
  return (
    <div
      className={`${styles.categoryHeaderItem} ${
        categoryActive === text && styles.categoryHeaderItemActive
      }`}
      onClick={() => handleCategoryActive(text)}
    >
      {text}
      <IoChevronDownSharp
        className={`${styles.arrow} ${
          categoryActive === text && styles.rotate
        }`}
      />
    </div>
  );
};
