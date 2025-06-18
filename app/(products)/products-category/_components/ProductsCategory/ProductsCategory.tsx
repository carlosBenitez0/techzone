"use client";
import React, { useState } from 'react';
import { FaArrowLeft, FaFilter, FaSearch } from 'react-icons/fa';
import { MdGridOn, MdList } from 'react-icons/md';
import { ProductCard } from '@/app/components/ui/ProductCard/ProductCard';
import { useProductsStore } from '@/app/store/productsStore';
import styles from './ProductsCategory.module.css';
import { ParamValue } from 'next/dist/server/request/params';
import { useRouter } from 'next/navigation';

interface ProductsCategoryProps {
  category: ParamValue;
}

export const ProductsCategory: React.FC<ProductsCategoryProps> = ({ category }) => {
  const categoryValue = category?.toString();
  const router = useRouter();
  const { products } = useProductsStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

  const handleRouter =(route: string) => {
    router.push(route);
  }

  // Filter products by category
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === categoryValue?.toLowerCase()
  );

  // Apply search and filters
  const filteredProducts = categoryProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    return matchesSearch && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const sortOptions = [
    { value: 'name', label: 'Nombre A-Z' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
    { value: 'rating', label: 'Mejor Valorados' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <button
            onClick={() => handleRouter('/')}
            className={styles.backButton}
          >
            <FaArrowLeft className={styles.backIcon} />
            Volver al inicio
          </button>
          
          <div className={styles.headerContent}>
            <div>
              <h1 className={styles.title}>
                {categoryValue}
              </h1>
              <p className={styles.subtitle}>
                {sortedProducts.length} producto{sortedProducts.length === 1 ? '' : 's'} encontrado{sortedProducts.length === 1 ? '' : 's'}
              </p>
            </div>
            
            <div className={styles.viewToggleContainer}>
              <div className={styles.viewToggle}>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`${styles.viewButton} ${viewMode === 'grid' ? styles.viewButtonGridActive : styles.viewButtonGridInactive}`}
                >
                  <MdGridOn className={styles.viewIcon} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`${styles.viewButton} ${viewMode === 'list' ? styles.viewButtonListActive : styles.viewButtonListInactive}`}
                >
                  <MdList className={styles.viewIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.layout}>
          {/* Filters Sidebar */}
          <div className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>
              <FaFilter className={styles.filterIcon} />
              Filtros
            </h3>

            {/* Search */}
            <div className={styles.searchContainer}>
              <label className={styles.searchLabel}>
                Buscar en {categoryValue}
              </label>
              <div className={styles.searchInputWrapper}>
                <FaSearch className={styles.searchIcon} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar productos..."
                  className={styles.searchInput}
                />
              </div>
            </div>

            {/* Price Range */}
            <div className={styles.priceRangeContainer}>
              <label className={styles.priceRangeLabel}>
                Rango de Precio
              </label>
              <div className={styles.priceInputs}>
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                  placeholder="Mín"
                  className={styles.priceInput}
                />
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  placeholder="Máx"
                  className={styles.priceInput}
                />
              </div>
            </div>

            {/* Sort */}
            <div className={styles.sortContainer}>
              <label className={styles.sortLabel}>
                Ordenar por
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setPriceRange({ min: 0, max: 10000 });
                setSortBy('name');
              }}
              className={styles.clearButton}
            >
              Limpiar Filtros
            </button>
          </div>

          {/* Products Grid */}
          <div className={styles.productsContainer}>
            {sortedProducts.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <FaSearch />
                </div>
                <h3 className={styles.emptyTitle}>
                  No se encontraron productos
                </h3>
                <p className={styles.emptyText}>
                  Intenta ajustar los filtros de búsqueda
                </p>
              </div>
            ) : (
              <div className={`${styles.productsGrid} ${
                viewMode === 'grid' ? styles.gridView : styles.listView
              }`}>
                {sortedProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className={styles.slideUp} 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {viewMode === 'grid' ? (
                      <ProductCard
                        product={product}
                        onNavigate={(route: string) => handleRouter(route)}
                      />
                    ) : (
                      <div className={styles.listItem}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className={styles.listImage}
                        />
                        <div className={styles.listContent}>
                          <h3 className={styles.listTitle}>
                            {product.name}
                          </h3>
                          <p className={styles.listDescription}>
                            {product.description}
                          </p>
                          <div className={styles.listPriceContainer}>
                            <div className={styles.listPriceWrapper}>
                              {product.originalPrice && (
                                <span className={styles.listOriginalPrice}>
                                  ${product.originalPrice.toFixed(2)}
                                </span>
                              )}
                              <span className={styles.listPrice}>
                                ${product.price.toFixed(2)}
                              </span>
                            </div>
                            <button
                            // debo ir al product que esta en el folder(products) la url desde aqui es products-category/product/${product.id}
                            //y necesito que sea /product/${product.id}
                              onClick={() => handleRouter(`/product/${product.id}`)}
                              className={styles.listButton}
                            >
                              Ver Detalles
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};