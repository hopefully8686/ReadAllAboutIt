import React from 'react';

const BookListItem = ({book}) => {
  return (
    <li className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="media-object" src={book.imageLink} />
        </div>

        <div className="media-body">
          <div className="media-heading"></div>
        </div>
      </div>
    </li>
  );
};

export default BookListItem;