import React, { useState } from 'react';

function InputBook() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && category.trim()) {
      setTitle('');
      setCategory('');
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
          placeholder="book category"
          value={category}
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
