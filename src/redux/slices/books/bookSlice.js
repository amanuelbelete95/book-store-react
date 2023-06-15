import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3v8geQIXRo03XxDEJ6ZJ/books/';
const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  isLoading: true,
  errorMsg: false,
  postMsg: false,
  deleteMsg: false,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const bookTitle = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookTitle);
    },
    addBook: (state, action) => {
      const book = action.payload;
      state.books.push(book);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
