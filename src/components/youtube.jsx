import React, { useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from '../actions';

import SearchBar from './search_bar';
import { useSearchVideosQuery } from '../services/youtube-api-thunk';
import VideoList from './video_list';
import VideoDetail from './video_detail';

function YouTubeHooks(props) {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.text);

  // eslint-disable-next-line no-unused-vars
  // RTK query hook
  const { data, error, isLoading } = useSearchVideosQuery(query);

  /* without thunk */
  // ADD: import youtubeSearch from '../services/youtube-api';
  // const search = () => {
  //   youtubeSearch(query).then((videos) => {
  //     dispatch(setVideos(videos));
  //   });
  // };

  const debouncedSearch = useCallback(
    debounce(() => {
      if (!error && !isLoading) {
        dispatch(setVideos(data.items));
      }
    }, 200),
    [data, dispatch, error, isLoading],
  );

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
