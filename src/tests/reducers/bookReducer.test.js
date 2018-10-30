import * as reducers from '../../reducers/reducer_books';
import * as types from '../../actions/index';
import deepFreeze from 'deep-freeze';

describe('book.reducer', () => {
  it('returns book data as state', () => {
    const initialState = {books: []};
    deepFreeze(initialState);

    const newBookData = {
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
      ]
    }
    const payload = { bookData: newBookData };
    const changedState = reducers.bookReducer({ books: []}, {type: 'FETCH_BOOKS', payload});

    expect(changedState).toEqual(newBookData);
  });

  it('returns default state when no action matches', () => {
    const initialState = {books: []};
    deepFreeze(initialState);
    
    const currentState = {
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
      ]
    };
    const changedState = reducers.bookReducer(currentState, {type: 'NOT_BOOKS'});

    expect(changedState).toEqual(currentState);
  });

  it('returns default state type if no state is passed', () => {
    const initialState = {books: []};
    deepFreeze(initialState);

    const changedState = reducers.bookReducer(undefined, {type: 'NOT_BOOKS'});

    expect(changedState).toEqual({books: []});
  });
});