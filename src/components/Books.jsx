import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import BookList from './BookList';
import { postBook } from '../redux/slices/books/bookSlice';

function Books() {
  const { postMsg } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [cat, setCat] = useState('Fiction');

  return (
    <div className="books">
      <BookList />
      <form className="form">
        <div className="form-line" />
        <h1 className="form-title">ADD NEW BOOK</h1>
        <div className="form-body">
          <input
            className="author"
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
            style={{
              border: 'none',
              padding: '.5em',
              flex: 1,
            }}
            required
          />
          <select
            className="select"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="action">Fiction</option>
            <option value="sci-fi">Nonfiction</option>
            <option value="drama">Drama</option>
          </select>
          <button
            type="submit"
            onClick={async (e) => {
              e.preventDefault();

              if (author !== '' && title !== '') {
                const book = {
                  item_id: uuidv4(),
                  title,
                  author,
                  category: cat,
                };
                dispatch(postBook(book));
                setAuthor('');
                setTitle('');
              }
            }}
          >
            {postMsg && <div> POSTING BOOK</div>}
            {!postMsg && <div>ADD BOOK</div>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Books;
