import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/index';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FetchData from '../containers/fetch_data';
import groupBy from '../utilities/reduce';

@FetchData
export class BooksByAuthor extends Component {
  render() {
    return (
      <Card>
        {Object.entries(groupBy(this.props.books, 'author')).map((bookArray) => {
          console.log(bookArray);
          return (
            <CardContent key={bookArray[0]}>
              <Typography color="primary" gutterBottom>
                {bookArray[0] + ' (' + bookArray[1].length + ' )'}
              </Typography>
            </CardContent>
          )
        })}
      </Card>
    );
  }
}

export default BooksByAuthor;