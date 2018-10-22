import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/index';
import { bindActionCreators } from 'redux';

import BookListItem from '../components/book_list_item';
class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }
  // const filterResults = props.books.books.filter(books => books.title.indexOf(props.searchQuery) > -1)
  //Look up Object.values
  renderList() {
     return this.props.books.map((book) => {
      return (
        <BookListItem
          key={book.ISBN} 
          link={book.link}
          title={book.title}
          author={book.author}
          img={<img src={book.imageLink} />}
        >
        </BookListItem>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.bookState.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBooks: fetchBooks }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);