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
import { CartIcon } from "../Icons/CartIcon";
import { useUserStore } from "@/app/store/userStore";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { isAuthenticated } = useAuthStore();
  const { user } = useAuthStore();
  console.log(isAuthenticated, user?.roleName);

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

        <div className={menuOpen ? styles.bgMenu : styles.bgMenuClosed}></div>

        <button
          className={`${styles.menuButton} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <Link
            href="/"
            className={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>

          {isAuthenticated === true && user?.roleName === "User" ? (
            <div className={styles.navIcons}>
              <CartIcon />
              <Link
                href="/profile"
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                <div className={styles.navIconContainer}>
                  <FaRegUser className={styles.navIcon} />
                </div>
              </Link>
            </div>
          ) : isAuthenticated === true && user?.roleName === "Admin" ? (
            <Link
              href="/admin"
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              <div className={styles.navIconContainer}>
                <IoSettingsOutline className={styles.navIcon} />
              </div>
            </Link>
          ) : (
            <>
              <Link
                href={"/login"}
                className={styles.login}
                onClick={() => setMenuOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                href={"/register"}
                className={styles.register}
                onClick={() => setMenuOpen(false)}
              >
                Registrarse
              </Link>
            </>
          )}
        </nav>
      </div>
    );
  }

  // Desktop view
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <LogoTechZone />
      </div>

      <GlobalSearch />

      <div className={styles.navbarContent}>
        <ExploreDropdown />

        {isAuthenticated === true && user?.roleName === "User" ? (
          <div className={styles.navIcons}>
            <CartIcon />
            <Link href="/profile" className={styles.navLink}>
              <div className={styles.navIconContainer}>
                <FaRegUser className={styles.navIcon} />
              </div>
            </Link>
          </div>
        ) : isAuthenticated === true && user?.roleName === "Admin" ? (
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
};
