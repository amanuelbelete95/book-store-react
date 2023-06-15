import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [{
    item_id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    categories: 'Fiction',
    completedChap: 8,
    totalChap: 24,
  },
  {
    item_id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    categories: 'Fiction',
    completedChap: 1,
    totalChap: 4,
  },
  {
    item_id: uuidv4(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    categories: 'Nonfiction',
    completedChap: 10,
    totalChap: 100,
  }],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state = initialState, action) => {
      const newBook = {
        item_id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
        category: 'non classified',
        completedChap: 0,
        totalChap: 24,
      };
      state.books = [...state.books, newBook];
    },
    removeBook: (state, action) => {
      console.log(state.books);
      state.books = [
        state.books.filter((book) => book.item_id !== action.payload),
      ];
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export const selectBooks = (state) => state.books;
console.log(selectBooks);
export default bookSlice.reducer;
