import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bookData } from './data.js';

import SearchBar from './components/search_bar';
import BookList from './components/book_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      bookData,
      selectedBook: null,
      searchQuery: ''
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <BookList
          value={this.state.selectedBook}
          onBookSelect={ selectedBook => this.setState({selectedBook}) }
          books={this.state.bookData} 
        />
      </div>
    );
  }
}

ReactDOM.render( <App /> , document.querySelector('.container'));