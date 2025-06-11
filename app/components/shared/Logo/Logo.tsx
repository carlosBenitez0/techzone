import Image from "next/image";
import styles from "./Logo.module.css";
import Link from "next/link";

type LogoTypes = {
  w: number;
  h: number;
  clickable?: boolean;
};

export const Logo = ({ w, h, clickable }: LogoTypes) => {
  return clickable ? (
    <Link href={"/"}>
      <figure
        className={styles.logo}
        style={{ position: "relative", width: `${w}px`, height: `${h}px` }}
      >
        <Image
          src="https://res.cloudinary.com/dc69f3e0o/image/upload/v1745618706/gselogo_horizontal-removebg-preview_lcli4h.png"
          alt="Tech Zone"
          fill
          priority
        />
      </figure>
    </Link>
  ) : (
    <figure
      className={styles.logo}
      style={{ position: "relative", width: `${w}px`, height: `${h}px` }}
    >
      <Image
        src="https://res.cloudinary.com/dc69f3e0o/image/upload/v1745618706/gselogo_horizontal-removebg-preview_lcli4h.png"
        alt="Tech Zone"
        fill
        priority
      />
    </figure>
  );
};
