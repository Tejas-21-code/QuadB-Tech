import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = globalSlice.actions;

export default globalSlice.reducer;
