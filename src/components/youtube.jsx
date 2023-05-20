import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

function YouTubeHooks(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  const search = (text) => {
    youtubeSearch(text).then((result) => {
      setVideos(result);
      setSelected(result[0]);
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
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
      </div>
    </div>
  );
}

export default YouTubeHooks;
