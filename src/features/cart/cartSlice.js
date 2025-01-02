import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

// "id": 1,
// "name": "Margherita",
// "unitPrice": 12,
// "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
// "ingredients": [
//     "tomato",
//     "mozzarella",
//     "basil"
//   ],
//   "soldOut": false

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [
      {
        id: 12,
        name: "Mediterranean",
        quantity: 2,
        unitPrice: 16,
        totatPrice: 32,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementItemQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );
      item.quantity++;
      item.totatPrice = item.quantity * item.unitPrice;
    },
    decrementItemQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );
      item.quantity--;
      item.totatPrice = item.quantity * item.unitPrice;
    },
    claercart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  incrementItemQuantity,
  decrementItemQuantity,
  claercart,
} = cartSlice.actions;

export default cartSlice.reducer;
