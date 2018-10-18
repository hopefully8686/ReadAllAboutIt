export default function(state = null, action) {
  switch(action.type) {
    case FETCH_BOOKS:
      return action.payload
  }

  return state;
}