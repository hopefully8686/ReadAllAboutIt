export const bookReducer = (state = { books: []}, action) => {
  switch(action.type) {
    case 'FETCH_BOOKS':
      return action.payload.bookData;
    default:
      return state;
  }
}
export default bookReducer;