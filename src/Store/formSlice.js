// slices/pokemonSearch.js"
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addData } = formSlice.actions;

export default formSlice.reducer;
