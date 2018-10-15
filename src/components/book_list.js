import React from 'react';
import BookListItem from './book_list_item';

const BookList = (props) => {
  const bookItems = props.books.books.map((book) => {
    return <BookListItem key={book.ISBN} book={book} />
  })
  return (
    <ul>
      {/* {props.books.books.length} */}
      {bookItems}
    </ul>
  );
}

export default BookList;