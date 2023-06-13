import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const bookSlice = createSlice({
  name: 'book',
  initialState,
});

// export {addBook, removeBook}
export default bookSlice.reducer;
