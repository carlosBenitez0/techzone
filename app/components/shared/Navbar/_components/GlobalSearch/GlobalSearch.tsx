import React from "react";
import styles from "./GlobalSearch.module.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SearchDropdown } from "../../SearchDropdown/SearchDropdown";

export const GlobalSearch = () => {
  return (
    <div className={styles.globalSearch}>
      <div className={styles.iconContainer}>
        <HiMagnifyingGlass className={styles.magnifyingGlass} />
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="Buscar en TechZone"
      />
      <SearchDropdown />
    </div>
  );
};
