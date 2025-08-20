"use client";
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "@/app/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../Navbar/Navbar.module.css";

interface CartIconProps {
  className?: string;
}

export const CartIcon = ({ className = "" }: CartIconProps) => {
  const { itemCount } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Link href="/cart" className={`${styles.navLink} ${className}`}>
      <div className={styles.cartIcon}>
        <FaShoppingCart className="w-5 h-5" />
        {isMounted && itemCount > 0 && (
          <span className={styles.cartBadge}>
            {itemCount > 9 ? "9+" : itemCount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
