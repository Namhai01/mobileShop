import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reduce/cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
