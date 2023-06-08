import React from 'react';
import PropTypes from 'prop-types';

function BookItem(props) {
  const {
    categories,
    name,
    author,
    completedChap,
    totalChap,
  } = props;

  const bookProgress = `You have read ${(completedChap / totalChap) * 100}%`;

  const currentChap = `${completedChap < totalChap ? completedChap : totalChap}`;

  return (
    <div className="book-item">

      <div className="left-section">
        <span className="bookCat">{categories}</span>
        <span className="bookTitle">{name}</span>
        <span className="bookAuthor">{author}</span>
        <nav className="bookInter">
          <ul>
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
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
};

export default BookItem;
