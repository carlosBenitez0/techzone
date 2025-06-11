"use client";
import { useEffect, useState, useCallback } from "react";
import styles from "./ExploreDropdownContent.module.css";
import { CategoryHeaderItem } from "@/app/components/shared/";
import { categories } from "@/app/utils/data/categories";
import { SubCategory } from "../SubCategory/SubCategory";

export const ExploreDropdownContent = () => {
  const [subCategories, setSubCategories] = useState<
    Array<{ name: string; image: string }>
  >([]);
  const [categoryActive, setCategoryActive] = useState<string>(
    categories[0]?.name || ""
  );

  // Memoizamos la función para evitar recreaciones innecesarias
  const handleSubCategories = useCallback(() => {
    const foundCategory = categories.find(
      (category) => category.name === categoryActive
    );
    setSubCategories(foundCategory?.subcategories || []);
  }, [categoryActive]);

  // Actualizamos las subcategorías cuando cambia la categoría activa o las categorías
  useEffect(() => {
    handleSubCategories();
  }, [handleSubCategories]);

  const handleCategoryActive = (categorySelected: string) => {
    setCategoryActive(categorySelected);
  };

  if (categories.length === 0) {
    return (
      <div className={styles.exploreDropdownContent}>
        No hay categorías disponibles
      </div>
    );
  }

  return (
    <div className={styles.exploreDropdownContent}>
      <div className={styles.categoryHeaderContainer}>
        {categories.map((category) => (
          <CategoryHeaderItem
            key={category.name}
            text={category.name}
            categoryActive={categoryActive}
            handleCategoryActive={handleCategoryActive}
          />
        ))}
      </div>

      <div className={styles.subCategoriesContainer}>
        <p className={styles.categoryActiveTitle}>{categoryActive}</p>
        <div className={styles.subCategories}>
          {subCategories.length > 0 ? (
            subCategories.map((subCategory) => (
              <SubCategory key={subCategory.name} subCategory={subCategory} />
            ))
          ) : (
            <p>No hay subcategorías disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
};
