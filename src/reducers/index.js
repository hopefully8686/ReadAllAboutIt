import { combineReducers } from 'redux';
import bookReducer from './reducer_books';

const rootReducer = combineReducers({
  bookState: bookReducer
});

export default rootReducer;