import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3v8geQIXRo03XxDEJ6ZJ/books/';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/igr5y6nSy2HVWt5sA3th/books';

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

export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkAPI) => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('An error occurred while getting the data');
  }
});

export const postBook = createAsyncThunk('postBooks/postBook', async (book, thunkAPI) => {
  try {
    const resp = await axios(url, {
      method: 'POST',
      data: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (resp.status === 201) {
      thunkAPI.dispatch(getBooks());
      return null;
    }
    return null;
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to post book');
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (itemId, thunkAPI) => {
  try {
    const res = await axios(`${url}${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (res.status === 201) {
      thunkAPI.dispatch(getBooks());
      return null;
    }
    return null;
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to delete the book');
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
      state.errorMsg = true;
    },
    [postBook.pending]: (state) => {
      state.postMsg = true;
    },
    [postBook.fulfilled]: (state, action) => {
      state.postMsg = false;
      state.books = action.payload;
    },
    [postBook.rejected]: (state) => {
      state.postMsg = false;
    },
    [deleteBook.pending]: (state) => {
      state.deleteMsg = true;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.deleteMsg = false;
      state.books = action.payload;
    },
    [deleteBook.rejected]: (state) => {
      state.deleteMsg = false;
    },
  },
});

export default bookSlice.reducer;
