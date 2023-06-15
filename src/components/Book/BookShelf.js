import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { selectBooks } from '../../redux/books/booksSlice';
import BookItem from './BookItem';

function BookShelf() {
  const { books: booksStore } = useSelector((store) => store.books);
  console.log(booksStore);
  const books = booksStore.map((book) => (
    <BookItem
      key={book.item_id}
      categories={book.categories}
      title={book.title}
      author={book.author}
      completedChap={book.completedChap}
      totalChap={book.totalChap}
      idElem={book.item_id}
    />
  ));

  return (
    <div>
      {books}
    </div>
  );
}

export default BookShelf;
