"use client";
import { useAuthStore, useCartStore } from "@/app/store";
import { FaMinus, FaPlus, FaTrash, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./cart.module.css";

export default function CartPage() {
  const router = useRouter();
  const {
    items,
    itemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart,
  } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { isAuthenticated } = useAuthStore();

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    setIsClient(true);
  }, []);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleCheckout = () => {
    if (items.length === 0) return;

    if (!isAuthenticated) {
      // Redirect to login with a return URL
      router.push(`/`);
    } else {
      // Proceed to checkout
      router.push("/checkout");
    }
  };

  if (!isMounted) {
    return (
      <div className={styles.skeletonContainer}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonItemsContainer}>
          {[1, 2].map((i) => (
            <div key={i} className={styles.skeletonItem}>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonContent}>
                <div
                  className={`${styles.skeletonText} ${styles.skeletonTextShort}`}
                ></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonButton}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          onClick={() => router.back()}
          className={styles.backButton}
          aria-label="Volver"
        >
          <FaArrowLeft className={styles.backIcon} /> Volver
        </button>
        <h1 className={styles.title}>Tu Carrito</h1>
        <p className={styles.cartCount}>
          {itemCount === 0
            ? "Tu carrito está vacío"
            : `${itemCount} ${
                itemCount === 1 ? "producto" : "productos"
              } en el carrito`}
        </p>
      </div>

      {itemCount === 0 ? (
        <div className={styles.emptyCart}>
          <div className={styles.emptyCartIconContainer}>
            <svg
              className={styles.emptyCartIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h2 className={styles.emptyCartTitle}>Tu carrito está vacío</h2>
          <p className={styles.emptyCartMessage}>
            Agrega algunos productos para comenzar a comprar
          </p>
          <Link href="/" className={styles.continueShopping}>
            Seguir comprando
          </Link>
        </div>
      ) : (
        <div className={styles.cartLayout}>
          <div className={styles.cartItems}>
            {items.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.cartItemContent}>
                  <div className={styles.productContent}>
                    <Link
                      href={`/product/${item.id}`}
                      className={styles.productImageContainer}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className={styles.productImage}
                          sizes="(max-width: 640px) 100vw, 200px"
                        />
                      )}
                    </Link>
                    <div className={styles.productInfo}>
                      <h3 className={styles.productName}>{item.name}</h3>
                      <p className={styles.productPrice}>
                        ${item.price.toFixed(2)}
                      </p>
                      <div className={styles.quantityControls}>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className={styles.quantityButton}
                          disabled={item.quantity <= 1}
                          aria-label="Reducir cantidad"
                        >
                          <FaMinus />
                        </button>
                        <span className={styles.quantityDisplay}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className={styles.quantityButton}
                          aria-label="Aumentar cantidad"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.productFooter}>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className={styles.removeButton}
                        aria-label="Eliminar producto"
                      >
                        <FaTrash size={16} />
                      </button>

                      <div className={styles.subtotalContainer}>
                        <p className={styles.subtotalLabel}>Subtotal</p>
                        <p className={styles.subtotalAmount}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.orderSummary}>
            <h3 className={styles.orderSummaryTitle}>Resumen de la orden</h3>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Envío</span>
              <span>Gratis</span>
            </div>

            <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className={styles.checkoutButton}
              disabled={items.length === 0}
            >
              Proceder al pago
            </button>

            <button
              onClick={() => clearCart()}
              className={styles.clearCartButton}
              disabled={items.length === 0}
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
