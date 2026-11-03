import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import { cartItems } from "../../mock/Cart";
import type { CartItem } from "./types";

interface CartState { items: CartItem[]; loading: boolean; error: string | null }
const readSavedCart = (): CartItem[] => {
  try {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("trust-buy-cart");
    return saved ? JSON.parse(saved) as CartItem[] : [];
  } catch { return []; }
};
const initialState: CartState = { items: readSavedCart(), loading: false, error: null };
const cartSlice = createSlice({
  name: "cart", initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find(item => String(item.id) === String(action.payload.id) && item.size === action.payload.size);
      if (existing) existing.quantity = Math.min(existing.quantity + action.payload.quantity, existing.stock);
      else state.items.push(action.payload);
    },
    increaseQuantity(state, action: PayloadAction<number | string>) {
      const item = state.items.find(item => String(item.id) === String(action.payload));
      if (item && item.quantity < item.stock) item.quantity++;
    },
    decreaseQuantity(state, action: PayloadAction<number | string>) {
      const item = state.items.find(item => String(item.id) === String(action.payload));
      if (item && item.quantity > 1) item.quantity--;
    },
    removeItem(state, action: PayloadAction<number | string>) {
      state.items = state.items.filter(item => String(item.id) !== String(action.payload));
    },
    clearCart(state) { state.items = []; },
    restoreCart(state, action: PayloadAction<CartItem[]>) { state.items = action.payload; },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem, clearCart, restoreCart } = cartSlice.actions;

export default cartSlice.reducer;
