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
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
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
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decrementItemQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    claerCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  incrementItemQuantity,
  decrementItemQuantity,
  claerCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalPizzaPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getTotalPizzaQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
