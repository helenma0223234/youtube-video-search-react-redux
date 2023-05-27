import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { selectVideo } from '../actions';

function VideoListItem(props) {
  const dispatch = useDispatch();
  const imgUrl = props?.video?.snippet?.thumbnails?.default?.url;

  return (
    <li onClick={() => dispatch(selectVideo(props.video))}>
      <img src={imgUrl} alt="video" />
      <div>{props?.video?.snippet?.title}</div>
    </li>
  );
}

// subscribe itself to changes in the redux store as well, double-way state update imagine dispatch as single way
export default connect(null, { selectVideo })(VideoListItem);
