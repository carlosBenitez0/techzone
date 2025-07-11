"use client";
import {
  ExploreDropdown,
  GlobalSearch,
  LogoTechZone,
} from "@/app/components/shared/";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/app/store";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


export const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { isAuthenticated, userData } = useAuthStore();
  console.log(isAuthenticated, userData.roll);

  // Verificar si es mobile o desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verificación inicial sincrónica
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle(styles.noScroll, menuOpen);
    return () => document.body.classList.remove(styles.noScroll);
  }, [menuOpen]);

  // Esto evita renderizar hasta saber el tamaño de la pantalla
  if (isMobile === null)
    return (
      <div className={styles.navbar}>
        <div className={styles.navbarContent}>
          <LogoTechZone />
        </div>
      </div>
    );

  if (isMobile) {
    return (
      <div className={styles.navbar}>
        <div className={styles.navbarContent}>
          <LogoTechZone />
        </div>

        {/* <GlobalSearch /> */}
        <div className={menuOpen ? styles.bgMenu : styles.bgMenuClosed}></div>

        {/* Hamburguer Button */}
        <button
          className={`${styles.menuButton} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* Menú de navegación */}

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <Link href="/" className={styles.navLink}>
            Inicio
          </Link>
          {isAuthenticated === true && userData.roll === 'user' ? (
            <Link href="/profile" className={styles.navLink}>
              <div className={styles.navIconContainer}>
                <FaRegUser className={styles.navIcon} />
              </div>
            </Link>
          ) : isAuthenticated === true && userData.roll === 'admin' ? (
            <Link href="/admin" className={styles.navLink}>
              <div className={styles.navIconContainer}>
                <IoSettingsOutline className={styles.navIcon} />
              </div>
            </Link>
          ) : (
            <>
              <Link href={"/login"} className={styles.login}>
                Iniciar sesión
              </Link>
              <Link href={"/register"} className={styles.register}>
                Registrarse
              </Link>
            </>
          )}
        </nav>
      </div>
    );
  } else {
    return (
      <div className={styles.navbar}>
        <div className={styles.navbarContent}>
          <LogoTechZone />
        </div>
        <GlobalSearch />
        <div className={styles.navbarContent}>
          <ExploreDropdown />
          {isAuthenticated === true && userData.roll === 'user' ? (
            <>
            <Link href="/profile" className={styles.navLink}>
              <div className={styles.navIconContainer}>
                <FaRegUser className={styles.navIcon} />
              </div>
            </Link>
          </>
          ) : isAuthenticated === true && userData.roll === 'admin' ? (
            <Link href="/admin" className={styles.navLink}>
              <div className={styles.navIconContainer}>
                <IoSettingsOutline className={styles.navIcon} />
              </div>
            </Link>
          ) : (
            <>
              <Link href={"/login"} className={styles.login}>
                Iniciar sesión
              </Link>
              <Link href={"/register"} className={styles.register}>
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }
};
