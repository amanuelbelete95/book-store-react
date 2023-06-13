import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => ({ ...state, categories: 'Under construction' }),
  },
});
export const { chekStatus } = categorySlice.actions;
export default categorySlice.reducer;
