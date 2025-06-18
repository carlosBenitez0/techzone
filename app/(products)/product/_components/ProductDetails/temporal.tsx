import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Check, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { StarRating } from '../components/StarRating';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../contexts/ProductContext';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string) => void;
}

const DEMO_REVIEWS = [
  {
    id: 1,
    userName: 'Carlos M.',
    rating: 5,
    comment: 'Excelente producto, superó mis expectativas. La calidad es impresionante.',
    date: '2024-01-15'
  },
  {
    id: 2,
    userName: 'Ana L.',
    rating: 4,
    comment: 'Muy buena compra, el rendimiento es fantástico. Recomendado.',
    date: '2024-01-10'
  },
  {
    id: 3,
    userName: 'Miguel R.',
    rating: 5,
    comment: 'Perfecto para gaming, corre todos los juegos en ultra sin problemas.',
    date: '2024-01-08'
  }
];

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigate }) => {
  const { products } = useProducts();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [relatedSlideIndex, setRelatedSlideIndex] = useState(0);
  
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
          <button
            onClick={() => onNavigate('home')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  // Get related products from the same category
  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 6);

  const tabs = [
    { id: 'description', name: 'Descripción' },
    { id: 'specifications', name: 'Especificaciones' },
    { id: 'reviews', name: 'Reseñas' }
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Volver a productos
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden group relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Image Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(selectedImage === 0 ? product.images.length - 1 : selectedImage - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(selectedImage === product.images.length - 1 ? 0 : selectedImage + 1)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-primary-500 shadow-lg ring-2 ring-primary-200' 
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header Info */}
            <div>
              <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-orbitron font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <StarRating rating={product.rating} size="lg" />
                <span className="text-gray-600">({product.reviews} reseñas)</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 font-mono text-sm">SKU: {product.sku}</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-100">
              <div className="flex items-center space-x-4 mb-4">
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-4xl font-bold bg-tech-gradient bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              
              {product.freeShipping && (
                <div className="flex items-center text-accent-600 mb-4">
                  <Zap className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Envío gratis incluido</span>
                </div>
              )}

              {/* Stock Status */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-600 text-sm">Disponibilidad:</span>
                  <p className={`font-semibold ${
                    product.stock > 10 ? 'text-green-600' : 
                    product.stock > 0 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">Garantía 2 años</span>
                </div>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-3">
                  <label className="text-gray-700 font-medium">Cantidad:</label>
                  <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors duration-300 font-semibold"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 font-semibold bg-gray-50">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors duration-300 font-semibold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-tech-gradient text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center animate-glow">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Agregar al Carrito
                </button>
                <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-red-300 hover:bg-red-50 transition-all duration-300 group">
                  <Heart className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
                </button>
                <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group">
                  <Share2 className="w-6 h-6 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-sm font-medium text-green-800">Garantía 2 años</span>
              </div>
              <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <Check className="w-5 h-5 text-blue-500 mr-3" />
                <span className="text-sm font-medium text-blue-800">Soporte técnico</span>
              </div>
              <div className="flex items-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                <Check className="w-5 h-5 text-purple-500 mr-3" />
                <span className="text-sm font-medium text-purple-800">Instalación incluida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 bg-gray-50">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 relative ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 animate-slide-in"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-orbitron font-bold text-gray-900 mb-6">Descripción del Producto</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-gray-900 mb-6">Especificaciones Técnicas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={key} className="flex justify-between items-center py-4 px-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-200 transition-colors duration-300">
                        <span className="font-semibold text-gray-900">{key}:</span>
                        <span className="text-gray-700 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-gray-900 mb-6">Reseñas de Usuarios</h3>
                  <div className="space-y-6">
                    {DEMO_REVIEWS.map((review) => (
                      <div key={review.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-primary-200 transition-colors duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                            <StarRating rating={review.rating} size="sm" showNumber={false} />
                          </div>
                          <span className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
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
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2">Productos Relacionados</h3>
                  <p className="text-primary-200">Otros productos de {product.category}</p>
                </div>
                
                {relatedProducts.length > 3 && (
                  <div className="flex space-x-2">
                    <button
                      onClick={prevRelatedSlide}
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextRelatedSlide}
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.slice(relatedSlideIndex, relatedSlideIndex + 3).map((relatedProduct, index) => (
                  <div 
                    key={relatedProduct.id} 
                    className="animate-slide-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard
                      product={relatedProduct}
                      onClick={() => onNavigate(`product/${relatedProduct.id}`)}
                    />
                  </div>
                ))}
              </div>
              
              {relatedProducts.length > 3 && (
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-2">
                    {Array.from({ length: Math.ceil(relatedProducts.length / 3) }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setRelatedSlideIndex(index * 3)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          Math.floor(relatedSlideIndex / 3) === index
                            ? 'bg-primary-600'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};