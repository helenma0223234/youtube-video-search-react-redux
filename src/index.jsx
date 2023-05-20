import React from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
=======
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
>>>>>>> bdaad6a231e0ddd8ee7b12da4e79a859d066e5bc
import './style.scss';

import App from './components/app';

<<<<<<< HEAD
const root = createRoot(document.getElementById('main'));
root.render(<App />);
=======
import rootReducer from './reducers';

// this creates the store with the reducers
const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
>>>>>>> bdaad6a231e0ddd8ee7b12da4e79a859d066e5bc
