import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../components/book_list_item';

class BookList extends Component {
  // const filterResults = props.books.books.filter(books => books.title.indexOf(props.searchQuery) > -1)
  //Look up Object.values
  renderList() {
    return this.props.bookData.map((book) => {
        return (
          <BookListItem
            key={book.ISBN} 
            book={book} 
          >
            {book.title}
          </BookListItem>
        );
      });
  }

  render() {
    return (
      <div>
        {this.renderList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.bookData
  }
}
export default connect(mapStateToProps)(BookList);