"use client";
import { useState } from "react";
import styles from "./SearchDropdown.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { useClickOutside } from "@/app/hooks";
import Link from "next/link";

export const SearchDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [categories] = useState([
    "Todos",
    "Computación",
    "Smartphones",
    "Gaming",
    "Smart Home",
    "Audio",
    "Redes",
    "Impresión",
    "Drones",
    "Realidad Virtual",
    "Oficina",
    "Software",
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  // 1. Usamos el hook useClickOutside para detectar clics fuera del dropdown
  const dropdownRef = useClickOutside<HTMLDivElement>(() =>
    setDropdownVisible(false)
  );

  const handleDropdownToggle = (e: React.MouseEvent) => {
    // 2. evitar que el evento se propague al documento y cierre el dropdown
    // Porque usamos e.stopPropagation() en handleDropdownToggle,
    // lo que evita que el evento llegue al detector de clics fuera.
    e.stopPropagation();
    setDropdownVisible((prev) => !prev);
  };

  // 3. Manejador para selección de categoría
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  return (
    <div className={styles.searchDropdown} ref={dropdownRef}>
      <div
        className={`${styles.searchDropdownHeader} ${
          dropdownVisible && styles.searchDropdownHeaderActive
        }`}
        onClick={handleDropdownToggle}
      >
        <p>{selectedCategory}</p>
        <IoIosArrowForward
          className={`${styles.arrow} ${dropdownVisible && styles.rotate}`}
        />
      </div>

      {dropdownVisible && (
        <div className={styles.searchDropdownContent}>
          {categories.map((category, index) => (
            <Link
              href={`/products-category/${category}`}
              className={`${styles.searchDropdownItem} ${
                selectedCategory === category && styles.searchDropdownItemActive
              }`}
              key={index}
              onClick={() => handleSelectCategory(category)}
            >
              <FiExternalLink className={styles.listItemIcon} />
              <p>{category}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
