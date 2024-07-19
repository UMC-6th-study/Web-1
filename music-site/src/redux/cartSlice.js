import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../constants/cartItems";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  cartItems: [],
  totalPrice: !cartItems.length
    ? cartItems.reduce((acc, curr) => acc + curr.price * curr.amount, 0)
    : 0,
  totalCount: !cartItems.length
    ? cartItems.reduce((acc, curr) => acc + curr.amount, 0)
    : 0,
  status: "loading",
};

export const fetchGet = createAsyncThunk("get/fetchGet", async () => {
  try {
    const api = "http://localhost:8080/musics/2";
    const response = await fetch(api);

    if (!response.ok) {
      if (response.status === 404) {
        // console.error(`GET ${api} ${response.status} (Not Found)`);
      }
      throw new Error(`GET ${api} ${response.status} (Not Found)`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

export const cartItemAmount = createSlice({
  name: "cartItemAmount", // Slice의 이름
  initialState, // 초기 상태
  reducers: {
    increase: (state, action) => {
      const { cartItems } = state;
      cartItems.length &&
        cartItems.map((e) => {
          e.id == action.payload ? ++e.amount : e;
        });
    },
    decrease: (state, action) => {
      const { cartItems } = state;
      cartItems.length &&
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
  extraReducers(builder) {
    builder
      .addCase(fetchGet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGet.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload;
      })
      .addCase(fetchGet.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.error.message;
      });
  },
});

export const { increase, decrease, removeItem, clearItem, calculateTotals } =
  cartItemAmount.actions;
export default cartItemAmount.reducer;
