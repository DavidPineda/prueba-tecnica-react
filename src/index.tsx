import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();