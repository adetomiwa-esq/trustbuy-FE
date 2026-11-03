import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

export const selectCartItems = (state: RootState) =>
  state.cart.items;

export const selectSubtotal = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    )
);

export const selectShipping = createSelector(
  [selectSubtotal],
  (subtotal) =>
    subtotal > 500000 ? 0 : 25000
);

export const selectDiscount = createSelector(
  [selectSubtotal],
  (subtotal) =>
    subtotal >= 1000000
      ? subtotal * 0.1
      : 0
);

export const selectTotal = createSelector(
  [
    selectSubtotal,
    selectShipping,
    selectDiscount,
  ],
  (
    subtotal,
    shipping,
    discount
  ) => subtotal + shipping - discount
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce(
      (count, item) =>
        count + item.quantity,
      0
    )
);