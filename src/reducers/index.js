import { combineReducers } from '@reduxjs/toolkit';
import SearchReducer from './search-reducer';
import VideoReducer from './video-reducer';

// define the store
const rootReducer = combineReducers({
  video: VideoReducer,
  search: SearchReducer,
});

export default rootReducer;
