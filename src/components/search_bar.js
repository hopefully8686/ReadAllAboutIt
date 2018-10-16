import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { bookData } from '../data';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: '' };
  }

  handleSearch = (event) => {
    this.setState({searchQuery: event.target.value});
  }

  render() {
    const filterResults = this.state.searchQuery.filter(book => book.title.indexOf(this.state.searchQuery) > -1)

    return (
      <TextField
        className="search-bar"
        label="Search"
        value={this.state.searchQuery} 
        onChange={event => this.handleSearch(event)} 
        margin="dense"
      />
    );
  }
}

export default SearchBar;