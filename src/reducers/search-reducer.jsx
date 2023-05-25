import { ActionTypes } from '../actions';

const initialState = {
  text: 'pixar',
};

const SearchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH:
      return { text: action.searchText };
    default:
      return state;
  }
};

export default SearchReducer;
