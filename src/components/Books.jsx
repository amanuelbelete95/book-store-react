import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import BookList from './BookList';
import { addBook } from '../redux/slices/books/bookSlice';

function Books() {
  const { books } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [cat, setCat] = useState('Fiction');

  return (
    <div>
      <BookList books={books} />
      <div style={{
        width: '100%',
        background: 'black',
        height: '2px',
        marginTop: '10px',
        marginBottom: '10px',
      }}
      />

      <form>
        <h1>ADD NEW BOOK</h1>
        <div>
          <input
            type="text"
            value={author}
            placeholder="author"
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <input
            type="text"
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <select
            value={author}
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="action">Fiction</option>
            <option value="sci-fi">Nonfiction</option>
            <option value="Economy">Drama</option>
          </select>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              if (author !== '' && title !== '') {
                const book = {
                  item_id: `item${books.length + 1}`,
                  title,
                  author,
                  category: cat,
                };
                dispatch(addBook(book));
                setAuthor('');
                setTitle('');
              }
            }}
          >
            ADD BOOK
          </button>
        </div>
      </form>
    </div>
  );
}

export default Books;
