import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  name: string;
  icon: IconType;
  count: number;
  gradient: string;
}

export const CategoryCard = ({
  name,
  icon: Icon,
  count,
  gradient,
}: CategoryCardProps) => {
  return (
    <div className={styles.card} style={{ background: `var(${gradient})` }}>
      <Link href={`/category/${name.toLowerCase()}`} className={styles.link}>
        {/* Animated Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={`${styles.floatingOrb} ${styles.orb1}`}></div>
          <div className={`${styles.floatingOrb} ${styles.orb2}`}></div>
          <div className={`${styles.floatingOrb} ${styles.orb3}`}></div>
        </div>

        {/* Glowing Border Effect */}
        <div className={styles.glowBorder}>
          <div className={styles.borderPulse}></div>
          <div className={`${styles.cornerBorder} ${styles.topLeft}`}></div>
          <div className={`${styles.cornerBorder} ${styles.topRight}`}></div>
          <div className={`${styles.cornerBorder} ${styles.bottomLeft}`}></div>
          <div className={`${styles.cornerBorder} ${styles.bottomRight}`}></div>
        </div>

        {/* Shimmer Effect */}
        <div className={styles.shimmerEffect}></div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.iconContainerWrapper}>
            <div className={styles.iconContainer}>
              <Icon className={styles.icon} />
              <div className={styles.iconGlow}></div>
            </div>
            <div style={{ textAlign: "right" }}>
              <span className={styles.count}>{count}</span>
              <div className={styles.countLine}></div>
            </div>
          </div>

          <h3 className={styles.title}>{name}</h3>

          <p className={styles.description}>{count} productos disponibles</p>

          {/* Progress Bar */}
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
        </div>

        {/* Corner Sparkles */}
        <div className={`${styles.sparkle} ${styles.sparkle1}`}></div>
        <div className={`${styles.sparkle} ${styles.sparkle2}`}></div>
        <div className={`${styles.sparkle} ${styles.sparkle3}`}></div>

        {/* Floating Orb */}
        <div className={styles.floatingOrbLarge}></div>
      </Link>
    </div>
  );
};
