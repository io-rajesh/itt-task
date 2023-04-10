import { createSlice } from "@reduxjs/toolkit";

export const count = createSlice({
  name: "count",
  initialState: {
    num: 0,
  },
  reducers: {
    increment: (state) => {
      state.num += 1;
    },
    decrement: (state) => {
      state.num -= 1;
    },
    reset: (state) => {
      state.num = 0;
    },
  },
});

export const { increment, decrement, reset } = count.actions;

export default count.reducer;
