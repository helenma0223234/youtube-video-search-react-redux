import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

function App(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  const search = (text) => {
    youtubeSearch(text).then((result) => {
      setVideos(result);
      setSelected(result[0]);
    });
  };

  const debouncedSearch = useCallback(debounce(search, 400), []);

  useEffect(() => {
    search('pixar');
  }, []);

  return (
    <div className="body-wrapper">
      <div className="search-wrapper">
        <h2>Video Quick Search</h2>
        <SearchBar onSearchChange={debouncedSearch} />
      </div>
      <div id="video-section">
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
      </div>
    </div>
  );
}

export default App;
