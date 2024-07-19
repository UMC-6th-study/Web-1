import { configureStore } from "@reduxjs/toolkit";
import { cartItemAmount } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cartItemAmount: cartItemAmount.reducer,
  }, // rootReducer를 포함한 리듀서 객체
  devTools: true, // Redux DevTools Extension을 사용할지 여부
});
