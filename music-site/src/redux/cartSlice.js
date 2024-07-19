import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../constants/cartItems";
import { act } from "react";

const initialState = {
  cartItems,
  totalPrice: cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.amount,
    0
  ),
  totalCount: cartItems.reduce((acc, curr) => acc + curr.amount, 0),
};

export const cartItemAmount = createSlice({
  name: "cartItemAmount", // Slice의 이름
  initialState, // 초기 상태
  reducers: {
    increase: (state, action) => {
      const { cartItems } = state;
      cartItems.map((e) => {
        e.id == action.payload ? ++e.amount : e;
      });
    },
    decrease: (state, action) => {
      const { cartItems } = state;
      cartItems.map((e) => {
        e.id == action.payload ? --e.amount : e;
      });
    },
    removeItem: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (e) => e.id !== action.payload
      );
      return { ...state, [cartItems]: newCartItems };
    },
    clearItem: () => {
      return {
        cartItems: [],
        totalPrice: 0,
        totalCount: 0,
      };
    },
    calculateTotals: (state) => {
      const { cartItems } = state;
      const totalPrice = cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.amount,
        0
      );
      const totalCount = cartItems.reduce((acc, curr) => acc + curr.amount, 0);

      return {
        ...state,
        ["totalPrice"]: totalPrice,
        ["totalCount"]: totalCount,
      };
    },
  },
});

export const { increase, decrease, removeItem, clearItem, calculateTotals } =
  cartItemAmount.actions;
export default cartItemAmount.reducer;
