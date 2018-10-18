import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleSearch = (event) => {
    this.setState({searchQuery: event.target.value});
  }

  render() {
    return (
      <TextField
        className="search-bar"
        label="Search"
        value={this.props.searchQuery} 
        onChange={event => this.handleSearch(event)} 
        margin="dense"
      />
    );
  }
}

export default SearchBar;