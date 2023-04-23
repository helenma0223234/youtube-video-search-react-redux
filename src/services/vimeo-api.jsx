/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import axios from 'axios';

const CLIENT_ID = '5c8f945812d5fdba21c2193858276fe57cd85d8d';
const CLIENT_SECRET = 'N8cGyxliNlaFjSh1tyfFxcyhu55AmBFyH/9GjpKJT9GKiQOcD7reM8QhF2WJScn2Zinhi3+rAgBXLcaJQ0jTLMbNfBOlg+lvFXEyXYQHDYipqD5q904sxugMfjtfhalw';
const access_token = '504b602d4db5261559dd81c3040ce314';

const vimeoSearch = async (term) => {
  // const tokenResponse = await requestVimeoAccessToken();
  const response = await axios({
    url: 'https://api.vimeo.com/videos',
    method: 'GET',
    headers: {
      Authorization: `bearer ${access_token}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.vimeo.video+json;version=3.4',
    },
    params: {
      query: term,
      per_page: 5,
      page: 1,
    },
    crossDomain: true,
  }).catch((error) => {
    console.log(error);
  });
  console.log(response.data);
  return response.data.items;
};

export default vimeoSearch;
