import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import { selectBooks } from '../../redux/books/booksSlice';

function BookShelf() {
  const booksStore = useSelector(selectBooks);
  const myBooks = booksStore.map((book) => (
    <BookItem
      key={book.id}
      categories={book.categories}
      title={book.title}
      author={book.author}
      completedChap={book.completedChap}
      totalChap={book.totalChap}
    />
  ));

  return (
    <>
      {myBooks}
    </>
  );
}

export default BookShelf;
