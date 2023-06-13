import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [

    {
      item_id: uuidv4(),
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      finishedChap: 8,
      totalChap: 24,
    },
    {
      item_id: uuidv4(),
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      finishedChap: 1,
      totalChap: 4,
    },
    {
      item_id: uuidv4(),
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      finishedChap: 10,
      totalChap: 100,
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
        category: 'non classified',
        finishedChap: 0,
        totalChap: 24,
      };
      state.books = [...state.books, newBook];
    },
    removeBook: (state, action) => {
      state.books = [
        ...state.books.filter((book) => book.item_id !== action.payload),
      ];
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export const selectBooks = (state) => state.book.books;
export default bookSlice.reducer;
