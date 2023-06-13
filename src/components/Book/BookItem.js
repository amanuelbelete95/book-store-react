import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

function BookItem(props) {
  const dispatch = useDispatch();
  const {
    categories,
    name,
    author,
    completedChap,
    totalChap,
    idElem,
  } = props;

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  const bookProgress = `${Math.round((completedChap / totalChap)) * 100}%`;

  const currentChap = `${completedChap < totalChap ? completedChap : totalChap}`;

  return (
    <div className="book-item">

      <div className="left-section">
        <span className="bookCat">{categories}</span>
        <span className="bookTitle">{name}</span>
        <span className="bookAuthor">{author}</span>
        <nav className="bookInter">
          <ul>
            <li key={uuidv4()}>
              <button type="button" onClick={() => handleRemoveBook(idElem)}>
                Comments
              </button>
            </li>

            <li key={uuidv4()}>
              <button type="button" onClick={() => handleRemoveBook(idElem)}>
                Remove
              </button>
            </li>
            <li key={uuidv4()}>
              <button type="button" onClick={() => handleRemoveBook(idElem)}>
                Edit
              </button>
            </li>
          </ul>
        </nav>

      </div>
      <div className="middle-section">

        <p>
          {' '}
          {bookProgress}
        </p>
      </div>

      <div className="right-section">
        <p className="currentHolder">Current Chapter</p>
        <p className="currentChapter">{currentChap}</p>
        <button className="update-btn" type="button">Update Progress</button>
      </div>

    </div>
  );
}

BookItem.propTypes = {
  categories: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completedChap: PropTypes.number.isRequired,
  totalChap: PropTypes.number.isRequired,
  idElem: PropTypes.number.isRequired,
};

export default BookItem;
