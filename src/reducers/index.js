import { combineReducers } from '@reduxjs/toolkit';
import SearchReducer from './search-reducer';
import VideoReducer from './video-reducer';
import { youtubeApi } from '../services/youtube-api-thunk';

// define the store
const rootReducer = combineReducers({
  video: VideoReducer,
  search: SearchReducer,
  [youtubeApi.reducerPath]: youtubeApi.reducer,
});

export default rootReducer;
