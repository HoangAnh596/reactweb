import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css'
import './css/main.css'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);

reportWebVitals();