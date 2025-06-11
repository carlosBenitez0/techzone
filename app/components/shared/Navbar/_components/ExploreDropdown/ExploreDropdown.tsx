"use client";
import { useEffect, useState } from "react";
import styles from "./ExploreDropdown.module.css";
import { useClickOutside } from "@/app/hooks";
import { IoIosArrowForward } from "react-icons/io";
import { ExploreDropdownContent } from "@/app/components/shared/";

export const ExploreDropdown = () => {
  const [exploreDropdownVisible, setExploreDropdownVisible] =
    useState<boolean>(false);

  //const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const exploreDropdownRef = useClickOutside<HTMLDivElement>(() =>
    setExploreDropdownVisible(false)
  );

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExploreDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (exploreDropdownVisible) {
      navbar?.classList.add(styles.removeShadow);
    } else {
      navbar?.classList.remove(styles.removeShadow);
    }
  }, [exploreDropdownVisible]);

  return (
    <div className={styles.exploreDropdown} ref={exploreDropdownRef}>
      <div
        className={`${styles.exploreDropdownHeader} ${
          exploreDropdownVisible && styles.exploreDropdownHeaderActive
        }`}
        onClick={handleDropdownToggle}
      >
        <p>Explorar</p>
        <IoIosArrowForward
          className={`${styles.arrow} ${
            exploreDropdownVisible && styles.rotate
          }`}
        />
      </div>

      {exploreDropdownVisible && (
        <div className={styles.exploreDropdownContainer}>
          <ExploreDropdownContent />
        </div>
      )}
    </div>
  );
};
