import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.css";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  size = "md",
  showNumber = true,
  className = "",
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`${styles.star} ${styles[size]} ${
            star <= rating ? styles.starFilled : styles.starEmpty
          }`}
        />
      ))}
      {showNumber && (
        <span className={styles.ratingText}>{rating.toFixed(1)}</span>
      )}
    </div>
  );
};
