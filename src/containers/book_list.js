import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/index';
import { bindActionCreators } from 'redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import BookListItem from '../components/book_list_item';
export class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }
  // const filterResults = props.books.books.filter(books => books.title.indexOf(props.searchQuery) > -1)
  //Look up Object.values for generic filter
  // Look up includes instead of indexOf()
  // filter(this.props.books).map()

  renderHeader() {
    return (
      <TableHead>
          <TableRow>
            <TableCell>
              Read All About It
            </TableCell>
          </TableRow>
        </TableHead>
    );
  }

  renderBody() {
     return (
      <TableBody> 
       {this.props.books.map((book) => {
          return (
            <BookListItem
              book={book}
              key={book.ISBN}
            />
          )
       })}
      </TableBody> 
    );
  }

  render() {
    return (
      <div>
        <Table>
        {this.renderHeader()}
        {this.renderBody()}
        </Table>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    books: state.bookState.books
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBooks }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);