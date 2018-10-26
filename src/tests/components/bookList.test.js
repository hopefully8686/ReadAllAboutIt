import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { bindActionCreators } from 'redux';

import * as action from '../../actions/index';
import { mapStateToProps, mapDispatchToProps, BookList } from '../../containers/book_list';

describe('BookList', () => {
  let bookListComp;
  const props = {
    "books": [
      {
        "ISBN": 200,
        "author": "Douglas Adams",
        "country": "USA",
        "imageLink": "",
        "language": "English",
        "link": "",
        "pages": 500,
        "title": "Hitchhiker's Guide to the Galaxy",
        "year": 1978
      }
    ],
    fetchBooks: jest.fn()
  };
  
  describe('BookList functionality', () => {
    beforeEach(() => {
      bookListComp = shallow(<BookList {...props} />);
    });

    it('renders a BookList snapshot', () => {
      const tree = toJson(bookListComp);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('BookList props methods', () => {
    it('maps intended state to props', () => {
      const appState = {
        bookState: {
          "books": [
            {
              "ISBN": 300,
              "author": "New Author",
              "country": "Portugal",
              "imageLink": "",
              "language": "Portuguese",
              "link": "",
              "pages": 150,
              "title": "Meu Amor",
              "year": 2018
            }
          ]
        }
      };
      const expectedCompState = { books: appState.bookState.books };
      const actualCompState = mapStateToProps(appState);
      
      expect(expectedCompState).toEqual(actualCompState);
    });
  });

  it('maps intended actions through dispatch to props', () => {
    const dispatch = jest.fn();
    const componentState = mapDispatchToProps(dispatch);
    expect(JSON.stringify(componentState)).toBe(JSON.stringify(bindActionCreators(Object.assign({}, action), dispatch)));
  });
});