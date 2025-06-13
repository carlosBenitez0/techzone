import styles from "./Footer.module.css";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { LogoTechZoneNoText } from "../LogoTechZoneNoText/LogoTechZoneNoText";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.bottomFooter}>
        <div className={styles.footerInfo}>
          <LogoTechZoneNoText w={30} h={30} />
          <div className={styles.socialMedia}>
            <div className={styles.mediaIconContainer}>
              <a href="#" target="_blank" rel="noreferrer">
                <FaInstagram className={styles.mediaIcon} />
              </a>
            </div>
            <div className={styles.mediaIconContainer}>
              <a href="#" target="_blank" rel="noreferrer">
                <AiOutlineLinkedin className={styles.mediaIcon} />
              </a>
            </div>
            <div className={styles.mediaCconContainer}>
              <a href="#" target="_blank" rel="noreferrer">
                <FaWhatsapp className={styles.mediaIcon} />
              </a>
            </div>
            <div className={styles.mediaCconContainer}>
              <a href="#" target="_blank" rel="noreferrer">
                <FaFacebook className={styles.mediaIcon} />
              </a>
            </div>
          </div>
          <div>
            <p>
              Somos una tienda de tecnología y electronica, <br />
              con el objetivo de brindar a nuestros clientes <br /> un servicio
              de calidad y confort.
            </p>
          </div>
        </div>
        <div className={styles.containerLinks}>
          {/* Enlaces útiles */}
          <div className={styles.footerLinks}>
            <div>
              <h3>Enlaces útiles</h3>
            </div>
            <div>
              <nav className={styles.footerNav}>
                <ul className={styles.footerNavUl}>
                  <li>
                    <Link className={styles.footerLink} href="/login">
                      Iniciar Sesión
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.footerLink} href="/register">
                      Registrarse
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.footerLink} href="/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Políticas */}
          <div className={styles.footerLinks}>
            <div>
              <h3>Políticas</h3>
            </div>
            <div>
              <nav>
                <ul className={styles.footerNavUl}>
                  <li>
                    <Link className={styles.footerLink} href="/privacy-policy">
                      Política de privacidad
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.footerLink} href="/cookies-policy">
                      Política de Cookies
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.footerLink} href="/forms-policy">
                      Política de Formularios
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.footerLink} href="/legal-notice">
                      Aviso Legal
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Contacto */}
          <div className={styles.footerLinks}>
            <div>
              <h3>Contacto</h3>
            </div>
            <div>
              <p>+503 2222-2222</p>
              <p>Chalatenango, El Salvador</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          © {new Date().getFullYear()} Techzone. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
