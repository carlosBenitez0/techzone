import React, { useState, useEffect } from 'react';
import { AiOutlineClose as X, AiOutlineSave as Save, AiOutlinePlus as Plus, AiOutlineMinus as Minus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { Product } from '@/types/products';
import styles from './ProductForm.module.css';

interface ProductFormProps {
  product?: Product;
  onSave: (product: Omit<Product, 'id'> | Product) => void;
  onCancel: () => void;
  isEdit?: boolean;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  product,
  onSave,
  onCancel,
  isEdit = false
}) => {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    category: '',
    price: 0,
    originalPrice: 0,
    image: '',
    rating: 5,
    reviews: 0,
    stock: 0,
    freeShipping: false,
    featured: false,
    description: '',
    specifications: {}
  });

  const [specKey, setSpecKey] = useState('');
  const [specValue, setSpecValue] = useState('');

  const categories = [
    "Laptops",
    "PCs de Escritorio",
    "Componentes",
    "Monitores",
    "Periféricos",
    "Smartphones",
    "Gaming",
    "Audio",
    "Redes",
    "Impresión",
    "Oficina"
  ];

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price,
        originalPrice: product.originalPrice || 0,
        image: product.image,
        rating: product.rating || 5,
        reviews: product.reviews || 0,
        stock: product.stock,
        freeShipping: product.freeShipping || false,
        featured: product.featured || false,
        description: product.description,
        specifications: product.specifications || {}
      });
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productData = {
      ...formData,
      id: product?.id
    };
    
    onSave(productData);
  };

  const addSpecification = () => {
    if (specKey.trim() && specValue.trim()) {
      setFormData(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [specKey.trim()]: specValue.trim()
        }
      }));
      setSpecKey('');
      setSpecValue('');
    }
  };

  const removeSpecification = (key: string) => {
    setFormData(prev => {
      const newSpecs = { ...prev.specifications };
      delete newSpecs[key];
      return { ...prev, specifications: newSpecs };
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            {isEdit ? 'Editar Producto' : 'Nuevo Producto'}
          </h2>
          <button
            onClick={onCancel}
            className={styles.closeButton}
            type="button"
          >
            <X className={styles.closeIcon} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.formContent}>
          <div className={styles.formGrid}>
            {/* Basic Information */}
            <div>
              <h3 className={styles.sectionTitle}>Información Básica</h3>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nombre del Producto</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`${styles.formInput} ${styles.formText}`}
                  placeholder="Ej: ASUS ROG Strix RTX 4090"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Categoría</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className={`${styles.formInput} ${styles.formSelect}`}
                >
                  <option value="">Seleccionar categoría</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Precio</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData(
                      { ...formData, 
                        price: (e.target.value.charAt(0) === '0' && e.target.value.length > 1) ? 
                        parseFloat(e.target.value) : 
                        parseFloat(e.target.value) || 0 }
                    )}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Precio Original</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData(
                      { ...formData, 
                        originalPrice: (e.target.value.charAt(0) === '0' && 
                        e.target.value.length > 1) ? 
                        parseFloat(e.target.value) : 
                        parseFloat(e.target.value) || 0 
                      })
                    }
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Stock</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Rating</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) || 5 })}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Reviews</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.reviews}
                    onChange={(e) => setFormData({ ...formData, reviews: parseInt(e.target.value) || 0 })}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={formData.freeShipping}
                    onChange={(e) => setFormData({ ...formData, freeShipping: e.target.checked })}
                    className={styles.checkboxInput}
                  />
                  <span className={styles.checkboxLabel}>Envío Gratis</span>
                </label>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className={styles.checkboxInput}
                  />
                  <span className={styles.checkboxLabel}>Destacado</span>
                </label>
              </div>
            </div>

            {/* Images and Details */}
            <div>
              <h3 className={styles.sectionTitle}>Imágenes y Detalles</h3>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Imagen Principal</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className={styles.formInput}
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Descripción</label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className={styles.formInput}
                  placeholder="Descripción detallada del producto..."
                />
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className={styles.specificationsSection}>
            <h3 className={styles.sectionTitle}>Especificaciones Técnicas</h3>
            
            <div className={styles.specForm}>
              <input
                type="text"
                value={specKey}
                onChange={(e) => setSpecKey(e.target.value)}
                placeholder="Nombre (ej: CPU)"
                className={styles.formInput}
              />
              <input
                type="text"
                value={specValue}
                onChange={(e) => setSpecValue(e.target.value)}
                placeholder="Valor (ej: Intel i9-13900K)"
                className={styles.formInput}
              />
              <button
                type="button"
                onClick={addSpecification}
                className={styles.addSpecButton}
              >
                Agregar
              </button>
            </div>

            <div className={styles.specList}>
              {Object.entries(formData.specifications || {}).map(([key, value]) => (
                <div key={key} className={styles.specItem}>
                  <span className={styles.specText}>
                    <span className={styles.specKey}>{key}:</span> {value}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeSpecification(key)}
                    className={styles.removeSpecButton}
                  >
                    <FaTrash className={styles.removeSpecIcon} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className={styles.formActions}>
            <button
              type="button"
              onClick={onCancel}
              className={styles.cancelButton}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={styles.submitButton}
            >
              <Save className={styles.submitIcon} />
              {isEdit ? 'Actualizar' : 'Crear'} Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};