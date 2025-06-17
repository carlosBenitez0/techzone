import { useCallback, useMemo, useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiFilter, FiEye } from 'react-icons/fi';
import { Product } from '@/types/products';
import styles from './ProductsTable.module.css';
import { useProductsStore } from '@/app/store/productsStore';

interface ProductsTableProps {
  onEdit: (product:Product) => void;
  onAdd: () => void;
}

export const ProductsTable: React.FC<ProductsTableProps> = ({ onEdit, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  const products = useProductsStore((state)=> state.products);
  const recentProductsFirst = [...products].reverse();
  const deleteProduct = useProductsStore((state)=> state.deleteProduct);

  const categories = useMemo(()=>{
    return [...new Set(recentProductsFirst.map((p) => p.category))];
  }, [recentProductsFirst])

  const filteredProducts = useMemo(() => {
    const filtered = recentProductsFirst.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !categoryFilter || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
    return filtered;
  }, [searchTerm, categoryFilter, recentProductsFirst]);

  const handleDelete = useCallback((id: string) => {
    setShowDeleteConfirm(null);
    deleteProduct(id);
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h2 className={styles.title}>Gestión de Productos</h2>
            <p className={styles.subtitle}>Administra tu catálogo de productos</p>
          </div>
          <button
            onClick={onAdd}
            className={styles.addButton}
          >
            <FiPlus className={styles.icon} />
            Nuevo Producto
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <div className={styles.filtersContainer}>
          <div className={styles.searchContainer}>
            <FiSearch className={styles.filterIcon} />
            <input
              type="text"
              placeholder="Buscar productos por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.selectContainer}>
            <FiFilter className={styles.filterIcon} />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className={styles.categorySelect}
            >
              <option value="">Todas las categorías</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.th}>Producto</th>
              <th className={styles.th}>Categoría</th>
              <th className={styles.th}>Precio</th>
              <th className={styles.th}>Stock</th>
              <th className={styles.th}>Estado</th>
              <th className={styles.th}>Acciones</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {filteredProducts.map((product) => (
              <tr key={product.id} className={styles.tr}>
                <td className={styles.td}>
                  <div className={styles.productInfo}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />
                    <div>
                      <p className={styles.productName}>{product.name}</p>
                      <p className={styles.productId}>Id: {product.id}</p>
                    </div>
                  </div>
                </td>
                <td className={styles.td}>
                  <span className={styles.categoryBadge}>
                    {product.category}
                  </span>
                </td>
                <td className={styles.td}>
                  <div>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                    {product.originalPrice && (
                      <p className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</p>
                    )}
                  </div>
                </td>
                <td className={styles.td}>
                  <span className={`${styles.stockBadge} ${
                    product.stock > 19 
                      ? styles.stockHigh 
                      : product.stock > 9 
                        ? styles.stockMedium
                        : styles.stockLow
                  }`}>
                    <span className={styles.stockText}>{product.stock} unidades</span>
                  </span>
                </td>
                <td className={styles.td}>
                  <div className={styles.statusContainer}>
                    {product.featured && (
                      <span className={styles.featuredBadge}>
                        Destacado
                      </span>
                    )}
                    {product.freeShipping && (
                      <span className={styles.shippingBadge}>
                        Envío Gratis
                      </span>
                    )}
                  </div>
                </td>
                <td className={styles.td}>
                  <div className={styles.actions}>
                    <button
                      onClick={() => {
                        const typedProduct = product as Product;
                        onEdit(typedProduct);
                      }}
                      className={styles.editButton}
                      title="Editar producto"
                    >
                      <FiEdit2 className={styles.actionIcon} />
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(product.id)}
                      className={styles.deleteButton}
                      title="Eliminar producto"
                    >
                      <FiTrash2 className={styles.actionIcon} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredProducts.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <FiEye className={styles.eyeIcon} />
            </div>
            <p className={styles.emptyText}>No se encontraron productos</p>
            <p className={styles.emptySubtext}>Intenta ajustar los filtros de búsqueda</p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>Confirmar Eliminación</h3>
            <p className={styles.modalText}>
              ¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.
            </p>
            <div className={styles.modalActions}>
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className={styles.cancelButton}
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                className={styles.confirmButton}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};