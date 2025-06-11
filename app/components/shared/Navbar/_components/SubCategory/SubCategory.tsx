"use client";
import Image from "next/image";
import styles from "./SubCategory.module.css";

interface SubCategoryProps {
  subCategory: { name: string; image: string };
}

export const SubCategory = ({ subCategory }: SubCategoryProps) => {
  return (
    <div className={styles.subCategory}>
      <Image
        src={subCategory.image}
        alt={subCategory.name}
        width={70}
        height={70}
        className={styles.image}
      />
      <p className={styles.name}>{subCategory.name}</p>
    </div>
  );
};
