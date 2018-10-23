import * as actions from '../../actions/index';
import { bookData } from '../../data';

describe('book.actions', () => {
  it('creates an action to fetch the json data', () => {
    const expectedAction = {
      type: actions.FETCH_BOOKS,
      payload: {
        bookData
      }
    };

    expect(actions.fetchBooks()).toEqual(expectedAction);
  });
});