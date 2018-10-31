import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/index';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FetchData from '../containers/fetch_data';

@FetchData
export class BooksByAuthor extends Component {
  render() {
    return (
      <Card>
        {this.props.books.map((book) => {
          return (
            <CardContent key={book.ISBN}>
              <Typography color="primary" gutterBottom>
                {book.author}
              </Typography>
            </CardContent>
          )
        })}
      </Card>
    );
  }
}

export default BooksByAuthor;