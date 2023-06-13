import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';

function InputBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBook({ title, author }));
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('please input title and categories');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="book-title"
          value={title}
          onChange={handleChangeTitle}
          className="bookFormInput"
        />

        <input
          type="text"
          placeholder="book author"
          value={author}
          onChange={handleChangeCategory}
          className="bookFormCategory"
        />
        <button type="button"> Add Book</button>
      </form>

      <span className="message">{message}</span>
    </>
  );
}

export default InputBook;
