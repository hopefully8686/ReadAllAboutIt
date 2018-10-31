import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import BookListItem from '../components/book_list_item';
import FetchData from './fetch_data';

@FetchData
export class BookList extends Component {
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

export default BookList;