import React from "react";
import Link from "next/link";
import { FaShoppingCart, FaBolt } from "react-icons/fa";
import { Product } from "@/types/products";

import styles from "./ProductCard.module.css";
import { StarRating } from "@/app/components/ui/StarRating/StarRating";

interface ProductCardProps {
  product: Product;
  onNavigate: (route: string) => void;
}

export const ProductCard = ({ product, onNavigate }: ProductCardProps) => {
  const discountPercentage = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/product/${product.id}`} className={styles.productCard} onClick={() => onNavigate(`/product/${product.id}`)}>
      <div className={styles.card}>
        {/* Animated Border Glow */}
        <div className={styles.glowBorder}>
          <div className={styles.glowBorderInner}></div>
        </div>

        {/* Shimmer Effect */}
        <div className={styles.shimmerEffect}></div>

        {/* Floating Sparkles */}
        <div className={`${styles.sparkle} ${styles.sparkle1}`}></div>
        <div
          className={`${styles.sparkle} ${styles.sparkle2}`}
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className={`${styles.sparkle} ${styles.sparkle3}`}
          style={{ animationDelay: "1s" }}
        ></div>

        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.productImage}
          />

          {/* Gradient Overlay */}
          <div className={styles.gradientOverlay} />

          {/* Floating Badges */}
          {product.freeShipping && (
            <div className={styles.freeShippingBadge}>
              <FaBolt className="inline mr-1 text-xs" />
              Envío Gratis
            </div>
          )}

          {product.originalPrice && (
            <div className={styles.discountBadge}>-{discountPercentage}%</div>
          )}

          {/* Corner Glow Effect */}
          <div className={styles.cornerGlowTop}></div>
          <div className={styles.cornerGlowBottom}></div>
        </div>

        <div className={styles.content}>
          {/* Background Pattern */}
          <div className={styles.backgroundPattern}>
            <div className={styles.circlePrimary}></div>
            <div className={styles.circleAccent}></div>
          </div>

          <div>
            <h3 className={styles.productName}>{product.name}</h3>

            <div className="mb-3 flex items-center justify-between">
              <StarRating rating={product.rating} size="sm" />
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                ({product.reviews}) Reseñas
              </span>
            </div>

            <div className={styles.priceContainer}>
              {product.originalPrice && (
                <span className={styles.originalPrice}>
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className={styles.currentPrice}>
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className={styles.footer}>
              <span>
                {product.stock > 0 ? `${product.stock} disponibles` : "Agotado"}
              </span>

              <div
                className={styles.addToCartBtn}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Lógica para agregar al carrito
                }}
              >
                <FaShoppingCart className={styles.cartIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
