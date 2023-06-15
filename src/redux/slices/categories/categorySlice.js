import { createSlice } from '@reduxjs/toolkit';

const status = '';
const categorySlice = createSlice({
  name: 'category',
  initialState: '',
  reducers: {
    checkStatus: (state, action) => {
      if (action.type === status) {
        state.initialState += 'Under construction';
      }
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
