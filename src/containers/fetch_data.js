import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/index';
import { bindActionCreators } from 'redux';

export default function(WrappedComponent) {
  class FetchData extends Component {
    componentDidMount() {
      this.props.fetchBooks();
    }

    render() {
      return (
        <WrappedComponent
          {...this.props} 
        />
      );
    }
  }
  
  return connect(mapStateToProps, mapDispatchToProps)(FetchData);
}

export function mapStateToProps(state) {
  return {
    books: state.bookState.books
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBooks }, dispatch)
}