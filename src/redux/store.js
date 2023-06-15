import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './slices/books/bookSlice';
import categorySlice from './slices/categories/categorySlice';

const store = configureStore({
  reducer: {
    book: bookSlice,
    category: categorySlice,
  },
});

export default store;
