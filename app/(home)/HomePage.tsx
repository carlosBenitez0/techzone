"use client";
import React from "react";
import Link from "next/link";
import {
  FaLaptop,
  FaMicrochip,
  FaGamepad,
  FaDesktop,
  FaBolt,
  FaChartLine,
  FaStar,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { productsData } from "../utils/data/products";
import styles from "./HomePage.module.css";
import { CategoryCard, ProductCard } from "../components/ui";
import { Footer, Navbar } from "../components/shared";

export const HomePage = () => {
  // const featuredProducts = productsData.filter((product) => product.featured);
  const categories = [
    {
      name: "Laptops",
      icon: FaLaptop,
      count: 10 /* productsData.filter((p) => p.category === "Laptops").length */,
      gradient: "--laptops-gradient",
    },
    {
      name: "Componentes",
      icon: FaMicrochip,
      count: 5 /* productsData.filter((p) => p.category === "Componentes").length */,
      gradient: "--components-gradient",
    },
    {
      name: "Gaming",
      icon: FaGamepad,
      count: 4 /* productsData.filter((p) => p.category === "Gaming").length */,
      gradient: "--gaming-gradient",
    },
    {
      name: "Accesorios",
      icon: FaDesktop,
      count: 1 /* productsData.filter((p) => p.category === "Accesorios").length */,
      gradient: "--accessories-gradient",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Floating Background Elements */}
        <div className={styles.floatingBackground}>
          <div className={`${styles.floatingOrb} ${styles.orb1}`}></div>
          <div
            className={`${styles.floatingOrb} ${styles.orb2}`}
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className={`${styles.floatingOrb} ${styles.orb3}`}
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className={`${styles.floatingOrb} ${styles.orb4}`}
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.meshBackground}></div>

          <div className={styles.floatingBackground}>
            <div className={`${styles.floatingOrb} ${styles.orbLarge1}`}></div>
            <div
              className={`${styles.floatingOrb} ${styles.orbLarge2}`}
              style={{ animationDelay: "2s" }}
            ></div>
            <div className={`${styles.floatingOrb} ${styles.orbMedium}`}></div>
          </div>

          <div className={styles.gridPattern}></div>

          <div className={styles.container}>
            <div className={styles.textCenter}>
              <div className={`${styles.sparkle} ${styles.sparkle1}`}></div>
              <div
                className={`${styles.sparkle} ${styles.sparkle2}`}
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className={`${styles.sparkle} ${styles.sparkle3}`}
                style={{ animationDelay: "1s" }}
              ></div>

              <h1 className={styles.mainTitle}>
                <span className={styles.techText}>TECH</span>
                <span className={styles.whiteText}>ZONE</span>
                <div className={styles.glowEffect}>TECHZONE</div>
              </h1>

              <p className={styles.subtitle}>
                Descubre la tecnología del futuro
              </p>

              <div className={styles.buttonGroup}>
                <Link href="/products" className={styles.primaryButton}>
                  <span className={styles.buttonContent}>
                    Explorar Catálogo
                    <HiChevronRight className={styles.buttonIcon} />
                  </span>
                </Link>

                <Link href="/offers" className={styles.secondaryButton}>
                  <span className={styles.buttonContent}>
                    Ver Ofertas
                    <FaBolt
                      className={`${styles.buttonIcon} ${styles.bounceIcon}`}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className={`${styles.particle} ${styles.particle1}`}></div>
          <div
            className={`${styles.particle} ${styles.particle2}`}
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className={`${styles.particle} ${styles.particle3}`}
            style={{ animationDelay: "2s" }}
          ></div>
        </section>

        {/* Promotional Banner */}
        <section className={styles.promoBanner}>
          <div className={styles.promoShimmer}></div>
          <div className={styles.promoContent}>
            <div className={styles.promoItem}>
              <FaChartLine className={styles.promoIcon} />
              <span>RTX 4090 - 15% OFF</span>
            </div>

            <div
              className={`${styles.promoItem} ${styles.hiddenSm}`}
              style={{ animationDelay: "0.5s" }}
            >
              <FaStar className={styles.promoIcon} />
              <span>Envío gratis en compras superiores a $500</span>
            </div>

            <div
              className={`${styles.promoItem} ${styles.hiddenMd}`}
              style={{ animationDelay: "1s" }}
            >
              <FaBolt className={styles.promoIcon} />
              <span>12 cuotas sin interés</span>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className={`${styles.section} ${styles.categoriesSection}`}>
          <div className={styles.container}>
            <div className={styles.textCenter}>
              <h2 className={styles.sectionTitle}>
                Explora por <span className={styles.techText}>Categorías</span>
                <div className={styles.sectionUnderline}></div>
              </h2>
              <p className={styles.sectionSubtitle}>
                Encuentra exactamente lo que necesitas
              </p>
            </div>

            <div className={styles.categoriesGrid}>
              {categories.map((category, index) => (
                <div key={index}>
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.textCenter}>
              <h2 className={styles.sectionTitle}>
                Productos <span className={styles.techText}>Destacados</span>
                <div className={styles.sectionUnderline}></div>
              </h2>
              <p className={styles.sectionSubtitle}>
                Los mejores productos seleccionados para ti
              </p>
            </div>

            <div className={styles.productsGrid}>
              {productsData.slice(0, 8).map((product, index) => (
                <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className={styles.textCenter}>
              <Link
                href="/products"
                className={`${styles.primaryButton} ${styles.primaryButtonMg}`}
              >
                <span className={styles.buttonContent}>
                  Ver Todos los Productos
                  <HiChevronRight className={styles.buttonIcon} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`${styles.section} ${styles.featuresSection}`}>
          <div className={styles.container}>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIconContainer}>
                  <FaBolt className={styles.featureIcon} />
                  <div className={styles.featureIconGlow}></div>
                </div>
                <h3 className={styles.featureTitle}>Envío Rápido</h3>
                <p className={styles.featureDescription}>
                  Entrega en 24-48 horas en productos seleccionados
                </p>
              </div>

              <div
                className={styles.featureCard}
                style={{ animationDelay: "0.2s" }}
              >
                <div className={styles.featureIconContainer}>
                  <FaStar className={styles.featureIcon} />
                  <div className={styles.featureIconGlow}></div>
                </div>
                <h3 className={styles.featureTitle}>Garantía Premium</h3>
                <p className={styles.featureDescription}>
                  2 años de garantía en todos nuestros productos
                </p>
              </div>

              <div
                className={styles.featureCard}
                style={{ animationDelay: "0.4s" }}
              >
                <div className={styles.featureIconContainer}>
                  <FaChartLine className={styles.featureIcon} />
                  <div className={styles.featureIconGlow}></div>
                </div>
                <h3 className={styles.featureTitle}>Mejor Precio</h3>
                <p className={styles.featureDescription}>
                  Garantizamos el mejor precio del mercado
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
