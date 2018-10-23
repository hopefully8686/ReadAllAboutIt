import { bookData } from '../data.js';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export function fetchBooks() {
  return {
    type: FETCH_BOOKS,
    payload: {
      bookData
    }
  }
}

// export function filterBook(book) {
//   return {
//     type: SELECT_BOOK,
//     payload: book
//   };
// }