import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { deleteBook } from '../redux/slices/books/bookSlice';

function BookList() {

  const ulStyle = {
    padding: '0 5em',
    overflow: 'auto',
    maxHeight: '265px',
  };

  const liStyle = {
    background: '#fff',
    padding: '1em',
    marginBottom: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const catStyle = {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: '.9em',
  };
  const authorStyle = {
    color: '#4386bf',
  };
  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.3em',
    marginTop: '.3em',
    color: '#121212',
  };
  const editStyle = {
    marginRight: '.8em',
    paddingRight: '.8em',
    borderRight: '2px solid #e9e8e8',
    color: '#4386bf',
    cursor: 'pointer',
  };
  const deleteStyle = {
    marginRight: '.8em',
    paddingRight: '.8em',
    borderRight: '2px solid #e9e8e8',
    color: '#4386bf',
    cursor: 'pointer',
  };
  const commentStyle = {
    color: '#4386bf',
    cursor: 'pointer',
  };
  const div1Style = {
    display: 'flex',
    gap: '1em',
  };
  const div1pStyle = { textAlign: 'center', color: 'gray' };
  const div1spanStyle = { fontSize: '2.2em', color: 'black' };

  const {
    books, isLoading, errorMsg,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className='lds-roller'>
         <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
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
