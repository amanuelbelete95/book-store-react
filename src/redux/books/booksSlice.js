import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        title: action.payload.title,
        category: action.payload.category,
      };
      state.books = [...state.books, newBook];
    },
    removeBook: (state, action) => {
      state.books = [
        ...state.books.filter((book) => book.id !== action.payload.id),
      ];
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
