import Link from "next/link";
import styles from "./LogoTechZoneNoText.module.css";
import { GoCpu } from "react-icons/go";

interface LogoTypes {
  w: number;
  h: number;
  clickable?: boolean;
}

export const LogoTechZoneNoText = ({ w, h, clickable }: LogoTypes) => {
  if (clickable) {
    return (
      <Link href={"/"} className={styles.logo}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <div className={styles.logoImage}>
              <GoCpu style={{ width: w, height: h }} />
            </div>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          <div>
            <GoCpu
              className={styles.logoImage}
              style={{ width: w, height: h }}
            />
          </div>
        </div>
      </div>
    );
  }
};
