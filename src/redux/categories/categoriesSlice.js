import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const categorySlice= createSlice({
  name:'category',
  initialState,
  reducers: {
    checkCategory: (state) => {state}
  }
});


export default categorySlice.reducer;