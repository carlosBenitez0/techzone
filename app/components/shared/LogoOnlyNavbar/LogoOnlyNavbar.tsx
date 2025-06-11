import { Logo } from "../Logo/Logo";
import styles from "./LogoOnlyNavbar.module.css";

export const LogoOnlyNavbar = () => {
  return (
    <div className={styles.logoOnlyNavbar}>
      <Logo w={90} h={50} clickable={true} />
    </div>
  );
};
