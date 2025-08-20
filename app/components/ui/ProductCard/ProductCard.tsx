import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaBolt, FaPlus, FaSignInAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useCartStore } from "@/app/store/cartStore";
import { Product } from "@/types/products";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

import styles from "./ProductCard.module.css";
import { StarRating } from "@/app/components/ui/StarRating/StarRating";

interface ProductCardProps {
  product: Product;
  onNavigate: (route: string) => void;
}

export const ProductCard = ({ product, onNavigate }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCartStore();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const discountPercentage = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.stock <= 0 || !isAuthenticated) return;

    setIsAdding(true);

    // Simulate API call
    setTimeout(() => {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });

      toast.success(
        <div className="flex items-center gap-2">
          <FaPlus className="text-green-500" />
          <span>¡Agregado al carrito!</span>
        </div>,
        {
          position: "top-center",
          duration: 2000,
          style: {
            background: "#fff",
            color: "#1f2937",
            border: "1px solid #e5e7eb",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          },
        }
      );

      setIsAdding(false);
    }, 500);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className={styles.productCard}
      onClick={() => onNavigate(`/product/${product.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            className={`${styles.productImage} ${
              isHovered ? styles.imageHover : ""
            }`}
          />

          {/* Gradient Overlay */}
          <div className={styles.gradientOverlay} />

          {/* Add to Cart Button */}
          {isAuthenticated ? (
            <button
              className={`${styles.addToCartButton} ${
                isHovered ? styles.buttonVisible : ""
              } ${isAdding ? styles.adding : ""}`}
              onClick={handleAddToCart}
              disabled={product.stock <= 0 || isAdding}
              aria-label="Agregar al carrito"
            >
              {isAdding ? (
                <span className={styles.spinner}></span>
              ) : (
                <>
                  <FaShoppingCart className={styles.cartIcon} />
                  {product.stock > 0 ? "Agregar" : "Sin stock"}
                </>
              )}
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                router.push("/login");
              }}
              className={`${styles.loginPrompt} ${
                isHovered ? styles.buttonVisible : ""
              }`}
            >
              <FaSignInAlt className={styles.cartIcon} />
              Inicia sesión para comprar
            </button>
          )}

          {/* Floating Badges */}
          {product.freeShipping && (
            <div className={styles.freeShippingBadge}>
              <FaBolt
                style={{
                  display: "inline",
                  marginRight: "0.5rem",
                  fontSize: "0.75rem",
                }}
              />
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

            <div className={styles.ratingContainer}>
              <StarRating rating={product.rating} size="sm" />
              <span className={styles.ratingText}>
                ({product.reviews}) Reseñas
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
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
