import Link from "next/link";
import styles from "./LogoTechZone.module.css";
import { GoCpu } from "react-icons/go";

export const LogoTechZone = () => {
  return (
    <Link href="/" className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logoHoverEffect}></div>
        <GoCpu className={styles.logoIcon} />
        <div className={styles.sparkle}></div>
      </div>
      <div>
        <h1 className={styles.title}>TechZone</h1>
        <p className={styles.subtitle}>Premium Technology</p>
      </div>
    </Link>
  );
};
