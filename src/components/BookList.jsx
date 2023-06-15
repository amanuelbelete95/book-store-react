import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { deleteBook } from '../redux/slices/books/bookSlice';

function BookList({ books }) {
  const {
    books, isLoading, errorMsg,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div style={{ marginTop: '50px' }}>Loading...</div>
    );
  }

  if (errorMsg) {
    return (
      <div style={{ marginTop: '50px' }}>Failed to fetch</div>
    );
  }


  return (
    <ul>
      {Object.entries(books).map(([id, book]) => book.map((bookItem) => (
        <li key={id}>
          <div>
            <p>{bookItem.category}</p>
            <h2>{bookItem.title}</h2>
            <p>{bookItem.author}</p>
            <div>
              <button type="button">edit</button>
              <button
                type="button"
                onClick={() => {
                  dispatch(deleteBook(id));
                }}
              >
                delete
              </button>
              <button type="button">comment</button>
            </div>
          </div>
          <div>
            <div />
          </div>
        </li>
      )))}
    </ul>
  );
}

// BookList.propTypes = {
//   books: PropTypes.arrayOf().isRequired,
// };

export default BookList;
