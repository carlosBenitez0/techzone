// Tipo para las especificaciones técnicas (pares clave-valor)
type Specifications = {
  [key: string]: string | undefined;
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
  types?: string[];   
  brands?: string[];  
};

// Tipo principal para productos
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  additionalImages?: string[];
  stock: number;
  freeShipping: boolean;
  featured: boolean;
  description: string;
  specifications: Specifications | null;
};

// Tipo para productos sin ID (usado en formularios de creación)
export type NewProduct = Omit<Product, 'id'>;

// Tipo para las funciones de filtrado
export type ProductFilterFunctions = {
  getFeaturedProducts: () => Product[];
  getProductsByCategory: (category: string) => Product[];
  getProductById: (id: string) => Product | undefined;
};