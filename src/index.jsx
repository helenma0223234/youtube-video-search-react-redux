import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { youtubeApi } from './services/youtube-api-thunk';

import './style.scss';
import App from './components/app';
import rootReducer from './reducers';

// this creates the store with the reducers
const store = configureStore({
  reducer:
    rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(youtubeApi.middleware),
});
setupListeners(store.dispatch);

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
