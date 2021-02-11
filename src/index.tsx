import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';

import store from './store';
import 'semantic-ui-css/semantic.min.css';
import './main.css';

declare global {
  interface Window {
    store: object;
  }
}

if (process.env.NODE_ENV === 'development') {
  window.store = store.getState;
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <MainPage />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
