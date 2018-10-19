const bookReducer = (state = { books: []}, action) => {
  switch(action.type) {
    case 'FETCH_BOOKS':
      return action.payload.bookData;
  }

  return state;
}

export default bookReducer;