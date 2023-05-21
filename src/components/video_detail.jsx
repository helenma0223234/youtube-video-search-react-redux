import React from 'react';
import { useSelector } from 'react-redux';

function VideoDetail() {
  const video = useSelector((reduxState) => reduxState.video.selected);
  if (!video) {
    return <div>Loading...</div>;
  }

  const { videoId } = video.id; // is example of destructuring, pulling videoId from the object that is video.id
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="youtube detail" className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
