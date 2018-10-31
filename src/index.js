import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import BookList from './containers/book_list';
import BooksByAuthor from './components/books_by_author';
// import BooksByCountry from './components/books_by_country';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render( 
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={BookList} />
        <Route path="/authors" component={BooksByAuthor} />
        {/* <Route path="/country" component={BooksByCountry} /> */}
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));