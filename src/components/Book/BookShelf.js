import BookItem from './BookItem';

export const bookAr = [
  {
    categories: 'Action',
    name: 'The Hunger games',
    author: 'Suzanne Collins',
    completedChap: 6,
    totalChap: 20,
    id: 1,

  },
  {
    categories: 'Economic Book',
    name: 'Food Security',
    author: 'Suzanne Collins',
    completedChap: 6,
    totalChap: 20,
    id: 2,

  },
  {
    categories: 'Science Fiction',
    name: 'Dune',
    author: 'Frank',
    completedChap: 25,
    totalChap: 40,
    id: 3,

  },

];

function BookShelf() {
  const books = bookAr.map((book) => (
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
