import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/index';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class BooksByCountry extends Component {
  render() {
    return (
      <Card>
        {this.props.books.map((book) => {
          return (
            <CardContent>
              <Typography color="primary" gutterBottom>
                {book.country}
              </Typography>
            </CardContent>
          )
        })}
      </Card>
    );
  }
}

export default BooksByCountry;