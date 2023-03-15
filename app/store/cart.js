import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.total = 0;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.name,
          imgUrl: newItem.imgUrl,
          relleno: newItem.relleno,
          total: newItem.price,
        });
        state.total += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
        state.total += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }

      state.total -= existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
