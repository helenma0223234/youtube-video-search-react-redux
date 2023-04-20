/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube-api';
// import vimeoSearch from '../services/vimeo-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

function App(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);
  const [resourceType, setResourceType] = useState('youtube');
  const [searchText, setSearchText] = useState('pixar');

  const search = (text) => {
    let searchFunction;

    if (resourceType === 'youtube') {
      searchFunction = youtubeSearch;
    }
    // else if (resourceType === 'vimeo') {
    //   searchFunction = vimeoSearch;
    // }
    searchFunction(text).then((result) => {
      setVideos(result);
      setSelected(result[0]);
    });
  };

  useEffect(() => {
    search(searchText);
  }, [resourceType]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      search(searchText);
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);

  return (
    <div className="body-wrapper">
      <div className="search-wrapper">
        <h2>Video Quick Search</h2>
        <SearchBar onSearchChange={(text) => setSearchText(text)} />
      </div>
      {/* <div>
        <button type="button" onClick={() => setResourceType('youtube')}>YouTube</button>
        <button type="button" onClick={() => setResourceType('vimeo')}>Vimeo</button>
        <button type="button" onClick={() => setResourceType('giphy')}>GIPHY</button>
      </div>
      <h1>{resourceType}</h1> */}
      <div id="video-section">
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
      </div>
    </div>
  );
}

export default App;
