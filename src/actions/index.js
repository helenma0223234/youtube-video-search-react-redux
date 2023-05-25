// keys for actiontypes
export const ActionTypes = {
  SELECT_VIDEO: 'SELECT_VIDEO',
  SET_VIDEOS: 'SET_VIDEOS',
  SET_SEARCH: 'SET_SEARCH',
};

export function selectVideo(video) {
  return {
    type: ActionTypes.SELECT_VIDEO,
    payload: video,
  };
}

export function setVideos(videos) {
  return {
    type: ActionTypes.SET_VIDEOS,
    payload: videos,
  };
}

export function setSearch(text) {
  return {
    type: ActionTypes.SET_SEARCH,
    searchText: text,
  };
}
