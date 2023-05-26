import React, { useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from '../actions';

import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

function YouTubeHooks(props) {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.text);

  const search = () => {
    youtubeSearch(query).then((videos) => {
      dispatch(setVideos(videos));
    });
  };

  const debouncedSearch = useCallback(debounce(search, 500), [search]);

  useEffect(() => {
    debouncedSearch();
  }, [debouncedSearch]);

  return (
    <div>
      <SearchBar />
      <div id="video-section">
        <VideoDetail />
        <VideoList />
      </div>
    </div>
  );
}

export default YouTubeHooks;
