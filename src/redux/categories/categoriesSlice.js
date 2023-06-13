import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const categorySlice = createSlice({
  name: 'category',
  initialState,
});

export default categorySlice.reducer;
