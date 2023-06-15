import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/slices/books/bookSlice';

function BookList({ books }) {
  const dispatch = useDispatch();

  return (
    <ul>
      {books.map((book) => (
        <>
          <li
            key={book.item_id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '50px',
            }}
          >
            <div>
              <span>{book.category}</span>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <div style={{
                display: 'flex',
                gap: '10px',
                marginTop: '25px',
              }}
              >
                <button type="submit">Comments</button>
                <button onClick={() => dispatch(deleteBook(book.item_id))} type="submit">Remove</button>
                <button type="submit">Edit</button>
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
            >
              <div>
                <img alt={book.title} />
                <p>
                  8%
                  <br />
                  Completed
                </p>
              </div>
              <div>
                <p>Current chapter</p>
                <p>{book.chapter}</p>
                <button type="submit">UPDATE PROGRESS</button>
              </div>
            </div>
          </li>
        </>
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf().isRequired,
};

export default BookList;
