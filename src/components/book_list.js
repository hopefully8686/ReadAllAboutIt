import React from 'react';

import BookListItem from './book_list_item';

const BookList = (props) => {
  const bookItems = props.books.books.map((book) => {
    return (
      <BookListItem
        onBookSelect={props.onBookSelect}
        key={book.ISBN} 
        book={book} 
      />
    );
  });

  return (
    <div>
      {bookItems}
    </div>
  );
}

export default BookList;