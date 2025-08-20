"use client";
import { create } from "zustand";
import { Product } from "@/types/products";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

interface CartStore {
  items: CartItem[];
  itemCount: number;
  addToCart: (product: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  isInCart: (productId: string) => boolean;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  itemCount: 0,

  addToCart: (product, quantity = 1) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // Si el artículo ya existe, sumar la cantidad
        const updatedItems = state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return {
          items: updatedItems,
          itemCount: state.itemCount + quantity,
        };
      }

      // Añadir nuevo artículo con la cantidad especificada
      return {
        items: [...state.items, { ...product, quantity }],
        itemCount: state.itemCount + quantity,
      };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const itemToRemove = state.items.find((item) => item.id === productId);
      if (!itemToRemove) return state;

      return {
        items: state.items.filter((item) => item.id !== productId),
        itemCount: Math.max(0, state.itemCount - itemToRemove.quantity),
      };
    }),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return state;
      }

      const existingItem = state.items.find((item) => item.id === productId);
      if (!existingItem) return state;

      const quantityDiff = quantity - existingItem.quantity;

      return {
        items: state.items.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        ),
        itemCount: Math.max(0, state.itemCount + quantityDiff),
      };
    }),

  clearCart: () =>
    set({
      items: [],
      itemCount: 0,
    }),

  getCartTotal: () =>
    get().items.reduce((total, item) => total + item.price * item.quantity, 0),

  isInCart: (productId) => get().items.some((item) => item.id === productId),
}));
