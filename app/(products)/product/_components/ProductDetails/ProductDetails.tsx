import { useState } from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import {
  MdCheck,
  MdChevronLeft,
  MdChevronRight,
  MdShoppingCart,
  MdShare,
  MdFavorite,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { toast } from "react-hot-toast";
import styles from "./ProductDetails.module.css";
import { StarRating } from "@/app/components/ui/StarRating/StarRating";
import { ProductCard } from "@/app/components/ui/ProductCard/ProductCard";
import { useProductsStore } from "@/app/store/productsStore";
import { useCartStore } from "@/app/store/cartStore";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store";

interface ProductDetailProps {
  productId: string;
}

const DEMO_REVIEWS = [
  {
    id: 1,
    userName: "Carlos M.",
    rating: 5,
    comment:
      "Excelente producto, superó mis expectativas. La calidad es impresionante.",
    date: "2024-01-15",
  },
  {
    id: 2,
    userName: "Ana L.",
    rating: 4,
    comment: "Muy buena compra, el rendimiento es fantástico. Recomendado.",
    date: "2024-01-10",
  },
  {
    id: 3,
    userName: "Miguel R.",
    rating: 5,
    comment:
      "Perfecto para gaming, corre todos los juegos en ultra sin problemas.",
    date: "2024-01-08",
  },
];

export const ProductDetails: React.FC<ProductDetailProps> = ({ productId }) => {
  const router = useRouter();
  const { products } = useProductsStore();
  const { addToCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [relatedSlideIndex, setRelatedSlideIndex] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const product = products.find((p) => p.id === productId);

  const handleRouter = (route: string) => {
    router.push(route);
  };

  const handleAddToCart = () => {
    if (!product) return;

    // Si el usuario no está autenticado, redirigir al login
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    setIsAddingToCart(true);

    // Simulate API call
    setTimeout(() => {
      addToCart(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        },
        quantity // Usar la cantidad seleccionada
      );

      toast.success(
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          <span>
            {quantity > 1
              ? `¡${quantity} productos agregados al carrito!`
              : "¡Producto agregado al carrito!"}
          </span>
        </div>,
        {
          position: "top-center",
          duration: 3000,
          style: {
            background: "#fff",
            color: "#1f2937",
            border: "1px solid #e5e7eb",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          },
        }
      );

      setIsAddingToCart(false);
    }, 500);
  };

  if (!product) {
    return (
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundContent}>
          <h2 className={styles.notFoundTitle}>Producto no encontrado</h2>
          <button
            onClick={() => router.push("/")}
            className={styles.notFoundButton}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const tabs = [
    { id: "description", name: "Descripción" },
    { id: "specifications", name: "Especificaciones" },
    { id: "reviews", name: "Reseñas" },
  ];

  const nextRelatedSlide = () => {
    setRelatedSlideIndex((prev) =>
      prev + 3 >= relatedProducts.length ? 0 : prev + 3
    );
  };

  const prevRelatedSlide = () => {
    setRelatedSlideIndex((prev) =>
      prev - 3 < 0 ? Math.max(0, relatedProducts.length - 3) : prev - 3
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Breadcrumb */}
        <button onClick={() => handleRouter("/")} className={styles.backButton}>
          <FaArrowLeft className={styles.backIcon} />
          Volver a productos
        </button>

        <div className={styles.gridContainer}>
          {/* Product Images */}
          <div className={styles.imageSection}>
            <div className={styles.mainImageContainer}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.mainImage}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className={styles.infoSection}>
            {/* Header Info */}
            <div className={styles.header}>
              <span className={styles.categoryBadge}>{product.category}</span>
              <h1 className={styles.productTitle}>{product.name}</h1>
              <div className={styles.ratingContainer}>
                <StarRating rating={product.rating} size="lg" />
                <span className={styles.reviewCount}>
                  ({product.reviews} reseñas)
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className={styles.priceContainer}>
              <div className={styles.priceRow}>
                {product.originalPrice && (
                  <span className={styles.originalPrice}>
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className={styles.currentPrice}>
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className={styles.discountBadge}>
                    -
                    {Math.round(
                      (1 - product.price / product.originalPrice) * 100
                    )}
                    % OFF
                  </span>
                )}
              </div>

              {product.freeShipping && (
                <div className={styles.freeShipping}>
                  <MdCheck className={styles.checkIcon} />
                  <span className={styles.freeShippingText}>
                    Envío gratis incluido
                  </span>
                </div>
              )}

              {/* Stock Status */}
              <div className={styles.stockContainer}>
                <div>
                  <span className={styles.stockLabel}>Disponibilidad:</span>
                  <p
                    className={`${styles.stockStatus} ${
                      product.stock > 10
                        ? styles.inStock
                        : product.stock > 0
                        ? styles.lowStock
                        : styles.outOfStock
                    }`}
                  >
                    {product.stock > 0
                      ? `${product.stock} en stock`
                      : "Agotado"}
                  </p>
                </div>
                <div className={styles.warranty}>
                  <MdCheck className={styles.warrantyIcon} />
                  <span className={styles.warrantyText}>Garantía 2 años</span>
                </div>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className={styles.actionContainer}>
              <div className={styles.quantityRow}>
                <div className={styles.quantityControl}>
                  <label className={styles.quantityLabel}>Cantidad:</label>
                  <div className={styles.quantityInput}>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className={styles.quantityButton}
                    >
                      -
                    </button>
                    <span className={styles.quantityValue}>{quantity}</span>
                    <button
                      onClick={() =>
                        setQuantity(Math.min(product.stock, quantity + 1))
                      }
                      className={styles.quantityButton}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.actionButtons}>
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart || product.stock === 0}
                  className={`${styles.addToCartButton} ${
                    isAddingToCart ? styles.addingToCart : ""
                  }`}
                >
                  {isAddingToCart ? (
                    <>
                      <span className={styles.spinner}></span>
                      Agregando...
                    </>
                  ) : (
                    <>
                      <MdShoppingCart className={styles.cartIcon} />
                      {product.stock > 0 ? "Agregar al Carrito" : "Sin Stock"}
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    if (!isAuthenticated) {
                      router.push("/login");
                      return;
                    }
                    handleAddToCart();
                    if (product.stock > 0) {
                      router.push("/cart");
                    }
                  }}
                  disabled={isAddingToCart || product.stock === 0}
                  className={styles.buyNowButton}
                >
                  <MdOutlineShoppingCartCheckout className={styles.cartIcon} />
                  Comprar Ahora
                </button>
                <button className={styles.secondaryButton}>
                  <MdFavorite className={styles.secondaryIcon} />
                </button>
                <button className={styles.secondaryButton}>
                  <MdShare className={styles.secondaryIcon} />
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <MdCheck className={styles.featureIcon} />
                <span className={styles.featureText}>Garantía 2 años</span>
              </div>
              <div className={styles.featureItem}>
                <MdCheck className={styles.featureIcon} />
                <span className={styles.featureText}>Soporte técnico</span>
              </div>
              <div className={styles.featureItem}>
                <MdCheck className={styles.featureIcon} />
                <span className={styles.featureText}>Instalación incluida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabsWrapper}>
            {/* Tab Navigation */}
            <div className={styles.tabsHeader}>
              <nav className={styles.tabsNav}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${styles.tabButton} ${
                      activeTab === tab.id ? styles.activeTab : ""
                    }`}
                  >
                    {tab.name}
                    {activeTab === tab.id && (
                      <div className={styles.activeIndicator}></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className={styles.tabContent}>
              {activeTab === "description" && (
                <div className={styles.descriptionContent}>
                  <h3 className={styles.tabTitle}>Descripción del Producto</h3>
                  <p className={styles.descriptionText}>
                    {product.description}
                  </p>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h3 className={styles.tabTitle}>Especificaciones Técnicas</h3>
                  <div className={styles.specsGrid}>
                    {Object.entries(product?.specifications || {}).map(
                      ([key, value]) => (
                        <div key={key} className={styles.specItem}>
                          <span className={styles.specKey}>{key}:</span>
                          <span className={styles.specValue}>{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h3 className={styles.tabTitle}>Reseñas de Usuarios</h3>
                  <div className={styles.reviewsList}>
                    {DEMO_REVIEWS.map((review) => (
                      <div key={review.id} className={styles.reviewItem}>
                        <div className={styles.reviewHeader}>
                          <div>
                            <h4 className={styles.reviewAuthor}>
                              {review.userName}
                            </h4>
                            <StarRating
                              rating={review.rating}
                              size="sm"
                              showNumber={false}
                            />
                          </div>
                          <span className={styles.reviewDate}>
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className={styles.reviewText}>{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products Slider */}
        {relatedProducts.length > 0 && (
          <div className={styles.relatedContainer}>
            <div className={styles.relatedHeader}>
              <div>
                <h3 className={styles.relatedTitle}>Productos Relacionados</h3>
                <p className={styles.relatedSubtitle}>
                  Otros productos de {product.category}
                </p>
              </div>

              {relatedProducts.length > 3 && (
                <div className={styles.sliderControls}>
                  <button
                    onClick={prevRelatedSlide}
                    className={styles.sliderButton}
                  >
                    <MdChevronLeft className={styles.sliderIcon} />
                  </button>
                  <button
                    onClick={nextRelatedSlide}
                    className={styles.sliderButton}
                  >
                    <MdChevronRight className={styles.sliderIcon} />
                  </button>
                </div>
              )}
            </div>

            <div className={styles.relatedContent}>
              <div className={styles.relatedGrid}>
                {relatedProducts
                  .slice(relatedSlideIndex, relatedSlideIndex + 3)
                  .map((relatedProduct, index) => (
                    <div
                      key={relatedProduct.id}
                      className={styles.relatedItem}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ProductCard
                        product={relatedProduct}
                        onNavigate={() =>
                          handleRouter(`product/${relatedProduct.id}`)
                        }
                      />
                    </div>
                  ))}
              </div>

              {relatedProducts.length > 3 && (
                <div className={styles.pagination}>
                  {/* 8 / 3 = 2.666... -> Math.ceil(2.666) = 3 (necesitas 3 grupos: [0-2], [3-5], [6-7]). */}
                  {Array.from({
                    length: Math.ceil(relatedProducts.length / 3),
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setRelatedSlideIndex(index * 3)}
                      className={`${styles.paginationDot} ${
                        Math.floor(relatedSlideIndex / 3) === index
                          ? styles.activeDot
                          : ""
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
