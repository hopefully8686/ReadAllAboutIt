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
});