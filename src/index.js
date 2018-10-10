import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from '@material-ui/core';

import SearchBar from './components/search_bar';
import BookList from './components/book_list';
import { bookData } from './data.js';

console.log(bookData);
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { bookData };
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <BookList books={this.state.bookData} />
            </div>
        );
    }
}

ReactDOM.render( <App /> , document.querySelector('.container'));