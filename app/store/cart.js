import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    totalItems: 0,
    delivery: 0,
    grandTotal: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.total = 0;
      state.totalItems = 0;
      state.grandTotal = 0;
      state.delivery = 0;
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
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
      state.total += newItem.price;
      state.totalItems += 1;
      state.grandTotal += newItem.price;
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
      state.grandTotal -= existingItem.price;
      state.totalItems -= 1;
    },
    changeDelivery(state, action) {
      let num = action.payload;

      if (typeof num === "undefined" || num == 0) {
        state.delivery = 0;
      } else {
        switch (true) {
          case num <= 1 && num > 0:
            state.delivery = 1;
            break;
          case num < 2.5:
            state.delivery = 2;
            break;
          case num < 4.1:
            state.delivery = 3;
            break;
          case num < 6.2:
            state.delivery = 4;
            break;
          case num < 7.5:
            state.delivery = 5;
            break;
          case num < 8.8:
            state.delivery = 6;
            break;
          case num < 9.9:
            state.delivery = 7;
            break;
          case num < 10.9:
            state.delivery = 8;
            break;
          case num <= 12:
            state.delivery = 9;
            break;
          default:
            state.delivery = null;
        }
      }

      state.grandTotal = state.total + state.delivery;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
