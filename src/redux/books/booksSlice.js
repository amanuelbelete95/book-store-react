import { createSlice } from "@reduxjs/toolkit";


const initialState = [];
const bookSlice = createSlice({
  name:'book',
  initialState,
  reducers: {
    addBook: (state) => {
    state.bookAr.push({book})
    },
    removeBook: (state, action) => {
    const itemId = action.payload;
    state.bookAr = state.bookAr.filter((item) => itemId !== id)
    }
  }
});

export default bookSlice.reducer;