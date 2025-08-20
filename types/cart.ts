import { Product } from "./products";

export interface CartItem
  extends Pick<Product, "id" | "name" | "price" | "image"> {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  itemCount: number;
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  isInCart: (productId: string) => boolean;
}
