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

  const listSeparator = {
    marginTop: '1em',
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
  const div1pStyle = { textAlign: 'center', color: 'gray', marginRight: '5.2em' };
  const div1spanStyle = { fontSize: '2.2em', color: 'black' };

  const {
    books, isLoading, errorMsg,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="lds-roller">
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
      <div className="error">Failed to fetch</div>
    );
  }

  return (
    <ul style={ulStyle}>
      {Object.entries(books).map(([id, book]) => book.map((bookItem) => (
        <li
          key={id}
          style={liStyle}
        >
          <div>
            <p style={catStyle}>
              {bookItem.category}
            </p>
            <h2 style={titleStyle}>
              {bookItem.title}
            </h2>

            <p style={authorStyle}>
              {bookItem.author}
            </p>
            <div style={listSeparator}>
              <button
                type="button"
                style={editStyle}
              >
                edit
              </button>
              <button
                type="button"
                style={deleteStyle}
                onClick={() => {
                  dispatch(deleteBook(id));
                }}
              >
                delete
              </button>
              <button
                type="button"
                style={commentStyle}
              >
                comment
              </button>
            </div>
          </div>
          <div className="progress">
            <div style={div1Style}>
              <div className="rotate">
                <span className="circle"> </span>
              </div>
              <p style={div1pStyle}>
                <span style={div1spanStyle}>
                  64%
                </span>
                <br />
                Completed
              </p>
            </div>
            <div className="infos">
              <p className="current-chapter">Current chapter</p>
              <h3 className="chapter">chapter 17</h3>
              <button type="button" className="update">update progress</button>
            </div>
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
