import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import { AppRouter } from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
