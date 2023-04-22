/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
// import Buffer from 'node:buffer';
import { Vimeo } from 'vimeo';

const CLIENT_ID = '5c8f945812d5fdba21c2193858276fe57cd85d8d';
const CLIENT_SECRET = 'N8cGyxliNlaFjSh1tyfFxcyhu55AmBFyH/9GjpKJT9GKiQOcD7reM8QhF2WJScn2Zinhi3+rAgBXLcaJQ0jTLMbNfBOlg+lvFXEyXYQHDYipqD5q904sxugMfjtfhalw';
const access_token = 'b2bb96f22004f5bc45f766d24ae3016c';

const client = new Vimeo({ CLIENT_ID }, { CLIENT_SECRET }, { access_token });
// const createBasicAuthValue = () => {
//   return `basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`;
// };

// async function requestVimeoAccessToken() {
//   const response = await axios({
//     url: 'https://api.vimeo.com/oauth/authorize/client',
//     method: 'POST',
//     headers: {
//       Authorization: createBasicAuthValue(),
//       'Content-Type': 'application/json',
//       Accept: 'application/vnd.vimeo.*+json;version=3.4',
//     },
//     data: {
//       grant_type: 'client_credentials',
//       scope: 'public',
//     },
//   }).catch((error) => {
//     console.log(error);
//   });

//   return {
//     success: response.status === 200,
//     data: response.data.access_token,
//   };
// }

// async function requestVimeoChannel() {
// //   const tokenResponse = await requestVimeoAccessToken();

//   const response = await axios({
//     url: 'https://api.vimeo.com/channels/1328771',
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//       'Content-Type': 'application/json',
//       Accept: 'application/vnd.vimeo.*+json;version=3.4',
//     },
//   }).catch((error) => {
//     console.log(error);
//   });
//   console.log(response.data);
//   return response.data.items;
// }
const vimeoSearch = async (term) => {
  client.request({
    method: 'GET',
    path: '/tutorial',
    query: term,
  }, (error, body, status_code, headers) => {
    if (error) {
      console.log(error);
    }

    console.log(body);
  });
};
// const API_URL = 'https://api.vimeo.com/videos';
// const vimeoSearch = async (term) => {
//   try {
//     const response = await axios.get(API_URL, {
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//         'Content-Type': 'application/json',
//         Accept: 'application/vnd.vimeo.*+json;version=3.4',
//       },
//       query: term,
//     });
//     return response.data.items;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

export default vimeoSearch;
