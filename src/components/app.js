import React, { Component } from 'react';

import SearchBar from './search_bar';
import BookList from '../containers/book_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <BookList
          onBookSelect={ selectedBook => this.setState({selectedBook}) }
          books={this.state.bookData} 
        />
      </div>
    );
  }
}