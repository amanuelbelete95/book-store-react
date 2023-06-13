import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import { selectBooks } from '../../redux/books/booksSlice';

function BookShelf() {
  const booksStore = useSelector(selectBooks);
  const books = booksStore.map((book) => (
    <BookItem
      key={book.id}
      categories={book.categories}
      name={book.name}
      author={book.author}
      completedChap={book.completedChap}
      totalChap={book.totalChap}
    />
  ));

  return (
    <>
      {books}
    </>
  );
}

export default BookShelf;
