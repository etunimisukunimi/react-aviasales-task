import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import store from './store/store.js'
import Main from './components/Main.js';
import FinalButton from './components/FinalButton.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
      <FinalButton />
    </Provider>

  </React.StrictMode>
);

reportWebVitals();
