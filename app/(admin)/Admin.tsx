"use client"
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaChartBar as BarChart3,
  FaBoxOpen as Package,
  FaUsers as Users,
  FaDollarSign as DollarSign,
  FaStar as Star,
  FaChartPie as Activity,
  FaTimes
} from 'react-icons/fa';
import styles from './Admin.module.css';
import { Product } from '@/types/products';
import { ProductForm } from './_components/ProductForm/ProductForm';
import { AdminSidebar } from './_components/AdminSidebar/AdminSidebar';
import { ProductsTable } from './_components/ProductsTable/ProductsTable';
import { useProductsStore } from '../store';
import { useAuthStore } from '../store/authStore';

export const Admin: React.FC = () => {
  const router = useRouter();
  const { userData } = useAuthStore();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState(false);
 
  const products = useProductsStore((state)=> state.products);
  const recentProductsFirst = [...products].reverse();
  const addProduct = useProductsStore((state)=> state.addProduct);
  const editProduct = useProductsStore((state)=> state.editProduct);

  const handleSeeAllProducts = () => {
    setAllProducts((prev) => !prev)
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowProductForm(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleSaveProduct = (product: Omit<Product, 'id'> | Product) => {
    setShowProductForm(false);
    if (editingProduct) {
      editProduct(product as Product);
    } else {
      addProduct(product);
    }
    setEditingProduct(null);
  };

  const handleCancelForm = () => {
    setShowProductForm(false);
    setEditingProduct(null);
  };

  // Dashboard Stats
  const totalProducts = useMemo(() => recentProductsFirst.length, [recentProductsFirst]);
  const totalValue = useMemo(() => 
    recentProductsFirst.reduce((sum, product) => sum + Number(product.price * product.stock), 0), 
    [recentProductsFirst]
  );
  const lowStockProducts = useMemo(() => 
    recentProductsFirst.filter(product => product.stock < 10).length, 
    [recentProductsFirst]
  );
  const featuredProducts = useMemo(() => 
    recentProductsFirst.filter(product => product.featured).length, 
    [recentProductsFirst]
  );

  //Redirect if not admin 
   if (userData.roll !== 'admin') {
    return (
      <div className={styles.accessDenied}>
        <div className={styles.accessDeniedContent}>
          <h2 className={styles.accessDeniedTitle}>Acceso Denegado</h2>
          <p className={styles.accessDeniedText}>No tienes permisos para acceder al panel administrativo</p>
          <button
            onClick={() => router.push('/')}
            className={styles.accessDeniedButton}
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  const renderDashboard = () => (
    <div>
      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.totalProducts}`}>
          <div className={styles.statCardContent}>
            <div>
              <p className={styles.statCardText}>Total Productos</p>
              <p className={styles.statCardValue}>{totalProducts}</p>
            </div>
            <Package className={styles.statCardIcon} />
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.totalValue}`}>
          <div className={styles.statCardContent}>
            <div>
              <p className={styles.statCardText}>Valor Inventario</p>
              <p className={styles.statCardValue}>${totalValue.toFixed(2)}</p>
            </div>
            <DollarSign className={styles.statCardIcon} />
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.lowStock}`}>
          <div className={styles.statCardContent}>
            <div>
              <p className={styles.statCardText}>Stock Bajo</p>
              <p className={styles.statCardValue}>{lowStockProducts}</p>
            </div>
            <Activity className={styles.statCardIcon} />
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.featured}`}>
          <div className={styles.statCardContent}>
            <div>
              <p className={styles.statCardText}>Destacados</p>
              <p className={styles.statCardValue}>{featuredProducts}</p>
            </div>
            <Star className={styles.statCardIcon} />
          </div>
        </div>
      </div>

      {/* Recent Products */}
      <div className={styles.recentProducts}>
        <div className={styles.recentProductsHeader}>
          <h3 className={styles.recentProductsTitle}>{allProducts ? 'Todos los Productos' : 'Productos Recientes'}</h3>
          <button onClick={handleSeeAllProducts} className={styles.seeAllButton}>
            {allProducts ? 'Ver recientes' : 'Ver todos'}
          </button>
        </div>
        <div className={styles.recentProductsList}>
          {allProducts ? recentProductsFirst && recentProductsFirst.map((product) => (
            <div key={product.id} className={styles.recentProductItem}>
              <div className={styles.recentProductInfo}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.recentProductImage}
                />
                <div>
                  <p className={styles.recentProductName}>{product.name}</p>
                  <p className={styles.recentProductCategory}>{product.category}</p>
                </div>
              </div>
              <div>
                <p className={styles.recentProductPrice}>${product.price}</p>
                <p className={`${styles.recentProductStock} ${product.stock < 10 ? styles.lowStockTable : ''}`}>{product.stock} en stock</p>
              </div>
            </div>
          )) : recentProductsFirst && recentProductsFirst.slice(0, 5).map((product) => (
            <div key={product.id} className={styles.recentProductItem}>
              <div className={styles.recentProductInfo}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.recentProductImage}
                />
                <div>
                  <p className={styles.recentProductName}>{product.name}</p>
                  <p className={styles.recentProductCategory}>{product.category}</p>
                </div>
              </div>
              <div>
                <p className={styles.recentProductPrice}>${product.price}</p>
                <p className={`${styles.recentProductStock} ${product.stock < 10 ? styles.lowStockTable : ''}`}>{product.stock} en stock</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'products':
        return (
            <ProductsTable onEdit={handleEditProduct} onAdd={handleAddProduct} />
        );
      case 'users':
        return (
          <div className={styles.emptyState}>
            <Users className={styles.emptyStateIcon} />
            <h3 className={styles.emptyStateTitle}>Gestión de Usuarios</h3>
            <p className={styles.emptyStateText}>Esta funcionalidad estará disponible próximamente</p>
          </div>
        );
      case 'analytics':
        return (
          <div className={styles.emptyState}>
            <BarChart3 className={styles.emptyStateIcon} />
            <h3 className={styles.emptyStateTitle}>Analíticas</h3>
            <p className={styles.emptyStateText}>Esta funcionalidad estará disponible próximamente</p>
          </div>
        );
      case 'settings':
        return (
          <div className={styles.emptyState}>
            <Activity className={styles.emptyStateIcon} />
            <h3 className={styles.emptyStateTitle}>Configuración</h3>
            <p className={styles.emptyStateText}>Esta funcionalidad estará disponible próximamente</p>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className={styles.adminContainer}>
      
      <AdminSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />
      
      <div className={styles.mainContent}>
        <main className={styles.contentArea}>
          {renderContent()}
        </main>
      </div>

      {/* Product Form Modal */}
      {showProductForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>
                {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
              </h2>
              <button
                onClick={handleCancelForm}
                className={styles.closeButton}
              >
                <FaTimes className={styles.closeIcon} />
              </button>
            </div>
            <div>
              <ProductForm
                product={editingProduct || undefined}
                onSave={handleSaveProduct}
                onCancel={handleCancelForm}
                isEdit={!!editingProduct}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};