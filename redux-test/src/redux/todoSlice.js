import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;
const initialState = [];

/**
 * slice
 * 리듀서와 액션 생성함수등을 제공해주는 객체
 * crateReducer과 createAction의 할일을 해준다.
 *
 * 리듀서의 이름을 정하고 createSlice로 지정한다.
 */

export const todoSlice = createSlice({
  name: "todofunction",
  initialState,
  reducers: {
    add: (state, action) => {
      nextId++;
      state.push({
        id: nextId,
        text: action.payload,
        complete: false,
      });
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },

    complete: (state, action) => {
      return state.map((e) =>
        e.id === action.payload ? { ...e, complete: !e.complete } : e
      );
    },
  },
});

export const { add, remove, complete } = todoSlice.actions;
export default todoSlice.reducer;
