import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main.js';
import FrameEmailComponent from './components/FrameEmailComponent.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    <FrameEmailComponent />
  </React.StrictMode>
);

reportWebVitals();
