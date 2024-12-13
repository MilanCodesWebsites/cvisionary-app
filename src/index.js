import React from 'react';
import ReactDOM from 'react-dom';
import './app/globals.css'; // If you have any global CSS
import App from './app'; // App component

// Render your app into the 'root' div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);