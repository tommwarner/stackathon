import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './store/store';
import App from './components/App';

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
