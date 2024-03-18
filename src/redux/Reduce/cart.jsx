import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  product: [],
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.product.findIndex(
        (item) => item._id === newItem._id
      );
      if (existingItemIndex !== -1) {
        state.product[existingItemIndex].quantity++;
      } else {
        newItem.quantity = 1;
        state.product.push(newItem);
        state.counter++;
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      state.product = state.product.filter((item) => item._id !== itemId);
      state.counter--;
    },
    sumPrice(state, action) {
      state.price = state.product.reduce(
        (acc, curr) => acc + Number(curr.price * curr.quantity),
        0
      );
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const productToUpdate = state.product.find((item) => item._id === id);
      if (productToUpdate) {
        productToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, sumPrice, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
