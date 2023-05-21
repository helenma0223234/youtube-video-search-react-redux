import React, { useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setVideos } from '../actions';
import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

function YouTubeHooks(props) {
  const dispatch = useDispatch();
  const search = (text) => {
    youtubeSearch(text).then((videos) => {
      dispatch(setVideos(videos));
    });
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  useEffect(() => {
    debouncedSearch('pixar');
  }, []);

  return (
    <div>
      <SearchBar onSearchChange={debouncedSearch} />
      <div id="video-section">
        <VideoDetail />
        <VideoList />
      </div>
    </div>
  );
}

export default YouTubeHooks;
