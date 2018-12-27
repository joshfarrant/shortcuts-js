import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import registerServiceWorker from './registerServiceWorker';

import './styles/base.scss';
import App from './components/App';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

// registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextRootContainer = require('./components/App').default;
    ReactDOM.render((
      <BrowserRouter>
        <NextRootContainer />
      </BrowserRouter>
    ), document.getElementById('root'));
  });
};
