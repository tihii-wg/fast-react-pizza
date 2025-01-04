import { createSlice } from "@reduxjs/toolkit";

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
        totalPrice: 32,
      },
      {
        id: 6,
        name: "Vegetale",
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
      },
      {
        id: 11,
        name: "Spinach and Mushroom",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
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

export const getTotalPizzaPrice = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getTotalPizzaQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
