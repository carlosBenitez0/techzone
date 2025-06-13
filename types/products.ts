// Tipo para las especificaciones técnicas (pares clave-valor)
type Specifications = {
  [key: string]: string;
};

// Tipo para las categorías principales
export type Category = {
  name: string;
  image: string;
  subcategories: Subcategory[];
};

// Tipo para subcategorías
export type Subcategory = {
  name: string;
  image: string;
  types?: string[]; // Para categorías como componentes o periféricos
  brands?: string[]; // Para categorías como smartphones
};

// Tipo principal para productos
export type Product = {
  id: string;
  name: string;
  category: string; // Debería coincidir con las categorías/subcategorías definidas
  price: number;
  originalPrice?: number; // Opcional para mostrar precios con descuento
  rating: number;
  reviews: number;
  image: string;
  stock: number;
  freeShipping: boolean;
  featured: boolean;
  description: string;
  specifications: Specifications;
};

// Tipo para las funciones de filtrado
export type ProductFilterFunctions = {
  getFeaturedProducts: () => Product[];
  getProductsByCategory: (category: string) => Product[];
  getProductById: (id: string) => Product | undefined;
};

// Tipo para el contexto de productos (si usas React Context)
export type ProductContextType = {
  products: Product[];
  featuredProducts: Product[];
  getProductsByCategory: (category: string) => Product[];
  getProductById: (id: string) => Product | undefined;
  categories: Category[];
};
