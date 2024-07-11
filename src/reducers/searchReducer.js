const searchReducer = (state, action) => {
  if (action.type === "SET_SEARCH_TEXT")
    return action.payload;
  return state;
};

export default searchReducer;
